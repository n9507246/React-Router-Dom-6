import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function PostShow(){
    
    const {id} = useParams()
    
    const [dataPost, setDataPost] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setDataPost(data))
    }, [id])

    if(dataPost == undefined) return(
        <>
            <h1>{dataPost.title}</h1>
            <p>{dataPost.body}</p>
        </>
    )
    else return(
        <>
            Публикация не найдена
        </>
    )
}
