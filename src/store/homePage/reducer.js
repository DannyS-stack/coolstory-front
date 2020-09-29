const initialState = {
  loading: true,
  pages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "homePageFullyFetched":
      return { ...state, loading: false, pages: [...action.payload.data] };
    default:
      return state;
  }
};
