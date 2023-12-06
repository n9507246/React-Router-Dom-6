import { useAuth } from "../../hook/useAuth"
import { useNavigate } from "react-router-dom"

function Home() {
    const {user, singOut} = useAuth()
    const navigate = useNavigate()
    const logout = () => {
      singOut(() => {
        if(confirm('Выйти из аккаунта'))
          navigate('/', {replace:true})
      })
    }
    return (
      <>
        <h1>Welcome {user?.name}</h1>
        {
          user!== null && <button onClick={logout}>Sing out</button>
        }
        
      </>
    )
  }
  
  export default Home
  