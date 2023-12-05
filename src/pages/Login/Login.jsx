import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth'

export default function Login(){
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const fromPage = location.state?.from || '/'

    const {singIn} = useAuth();
    const heandlerSingIn = (event) => {
        event.preventDefault()
        
        const dataUser = {name: 'ass hole'}

        singIn(dataUser, () => {navigate(fromPage, {replace: true})})
    }

    return(
        <div>
            <h1 style={{marginBottom: '10px'}}>Login page</h1>
            <form >
                <div style={{marginBottom: '10px'}}>
                    <label style={{marginRight: '10px'}} >Name:</label>
                    <input type="text" />
                </div>
                <button onClick={heandlerSingIn}>Sing in</button>
            </form>

        </div>
    )
}