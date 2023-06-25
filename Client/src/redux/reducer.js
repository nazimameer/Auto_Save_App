const initialState = {
  documentId: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DOCUMENT_ID":
      return {
        ...state,
        documentId: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
