import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function PostShow(){
    
    const {id} = useParams()
    
    const navigate = useNavigate(); const PREVIOS_PAGE = -1; 
    const isNotEmptyObject = (obj) => Object.keys(obj).length !== 0  
    
    const [dataPost, setDataPost] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDataPost(data))
    }, [id])

    
    if(isNotEmptyObject(dataPost))
     return(
        <>
            <button onClick={() => { navigate(PREVIOS_PAGE)} } >
                Go back
            </button>
            <div>
                <h1>{dataPost.title}</h1>
                <p>{dataPost.body}</p>
            </div>
        </>
    )


}
