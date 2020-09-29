import {
  LOG_OUT,
  LOGIN_SUCCESS,
  STORY_DELETE_SUCCESS,
  TOKEN_STILL_VALID,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  homepage: {
    stories: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };
    case STORY_DELETE_SUCCESS:
      const storyId = action.payload;
      const newStories = state.homepage.stories.filter(
        (story) => story.id !== storyId //you want all the stories that are not the one you deleted in the new array
      );
      return {
        ...state,
        homepage: {
          ...state.homepage,
          stories: newStories,
        },
      };
    case "STORY_CREATE_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          homepage: {
            ...state.homepage,
            stories: [...state.stories, action.payload],
          },
        },
      };

    default:
      return state;
  }
};
