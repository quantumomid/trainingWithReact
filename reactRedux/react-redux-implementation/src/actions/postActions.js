import {
    GET_POSTS
  } from "./types";

import axios from "axios";
  
// get all posts
export const getPosts = () => async (dispatch) => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(result)
        dispatch({
            type: GET_POSTS,
            payload: result.data,
        });
};