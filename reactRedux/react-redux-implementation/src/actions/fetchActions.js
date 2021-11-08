import {
    GET_POSTS
  } from "./types";

import axios from "axios";
  
// get all posts
export const getPosts = () => async (dispatch) => {
    const cachedPosts = JSON.parse(localStorage.getItem("cachedPosts"));
    console.log(cachedPosts);
    let posts;
    if (!cachedPosts) {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = result.data;
        localStorage.setItem("cachedPosts", JSON.stringify(posts));
        console.log("Made GET request to API");
    } else{
        posts = cachedPosts;
    }
    // console.log(result)
        dispatch({
            type: GET_POSTS,
            payload: posts,
        });
};