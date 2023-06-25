import { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./TextEditor.css";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import { setDocumentId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const SAVE_INTERVAL_MS = 2000;
const TextEditor = () => {
  const { id: docID } = useParams();
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const documentId = useSelector((state) => state.documentId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDocumentId(docID));
  }, [docID, dispatch]);

  useEffect(() => {
    const s = io(import.meta.env.VITE_SOCKET_CONNECTION);
    setSocket(s);

    return () => {
      s.disconnect();
    };

  }, []);


  useEffect(() => {
    if (socket == null || quill == null) return;
    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });
    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, { theme: "snow" });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  return <div className="EditorContainer" ref={wrapperRef}></div>;
};

export default TextEditor;
