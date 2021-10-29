import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/postActions";
import Table from "../components/table/Table";
import './Home.css'

export default function Home (){
    //get dispath method (linked to store - via middleware Thunk in the background)
    const dispatch = useDispatch();
    // retrieve posts from the state "post" inside of the redux store
    const posts = useSelector((state) => state.post.posts);

  
    useEffect(() => {
      dispatch(getPosts());
    //   console.log(posts)
    }, []);

    return (
        <div className="homepage-container">
            <h1>HOME</h1>
            <div className="posts-table-container">
                {posts ? <Table data={posts} /> : <h3>LOADING.......</h3>}
            </div>
        </div>
    )
}