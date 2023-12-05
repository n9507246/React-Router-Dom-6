import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function Blog() {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    
    return (
      <>
        <div className="header_post_list">
          <h1>Post list</h1>
            <Link style={{color:'white'}} className='btn link' to='/post/create' >Create post</Link>
        </div>
        {
          posts.map(post => 
            <Link className='link' key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          )
        }
      </>
    )
  }
  
  export default Blog
  