import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TextEditor } from "./components/Home";
import LandingPage from "./pages/LandingPage";
import { v4 as uuidV4 } from "uuid";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route
        path="/home"
        element={<Navigate to={`/documents/${uuidV4()}`} />}
      />
      <Route path="/documents/:id" element={<TextEditor />} />
    </Routes>
  </BrowserRouter>
);

export default App;
