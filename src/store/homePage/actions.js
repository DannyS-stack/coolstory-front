import axios from "axios";

const API_URL = `http://localhost:4000/homepage`;

export function homePageFullyFetched(data) {
  return {
    type: "homePageFullyFetched",
    payload: data,
  };
}

export function fetchHomePage() {
  return async function thunk(dispatch, getState) {
    const data = await axios.get(`${API_URL}`);
    console.log("data in fetchhomepage?:", data);

    dispatch(homePageFullyFetched(data));
  };
}
