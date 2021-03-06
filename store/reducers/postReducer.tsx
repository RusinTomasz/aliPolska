import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import * as types from "../types";

export interface PostState {
  posts?: any[];
  post?: any;
  loading?: boolean;
  error?: string;
  server?: {
    posts?: any[];
    post?: any;
    loading?: boolean;
    error?: string;
  };
}

const initialState: PostState = {
  server: {
    posts: [],
  },
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: { ...state.server, ...action.payload.post.server },
      };
    case types.GET_POSTS_SERVER:
      return {
        ...state,
        server: {
          ...state.server,
          posts: action.payload,
        },
      };
    case types.GET_POSTS:
      return {
        ...state,
        posts: ["1st", "2nd"],
      };
    default:
      return state;
  }
};
