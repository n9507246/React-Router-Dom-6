import { useState, useEffect } from "react"
import {Link, useSearchParams} from 'react-router-dom'
import BlogFilter from "../../components/BlogFilter";

function Blog() {

    const [posts, setPosts] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest')

    const startsFrom = latest ? 5 : 1


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

        <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
        
        {
          posts
            .filter( post => post.title.includes(postQuery) && post.id >= startsFrom)
            .map(post => 
            <Link className='link' key={post.id} to={`/posts/${post.id}`}>
              <li>{post.id} {post.title}</li>
            </Link>
          )
        }
      </>
    )
  }
  
  export default Blog
  