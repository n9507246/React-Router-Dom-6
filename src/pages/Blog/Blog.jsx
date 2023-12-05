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
        <div>Posts index</div>
        {
          posts.map(post => 
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          )
        }
      </>
    )
  }
  
  export default Blog
  