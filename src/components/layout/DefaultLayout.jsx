import { Link, Outlet } from 'react-router-dom' 
import CustomLink from '../UI/CustomLink'

function DefaultLayout() {

  return (
    <>
        <header>
            <div className="naw">
                <CustomLink className='naw-link' to='/'>Home</CustomLink>
                <CustomLink className='naw-link' to='/about'>About</CustomLink>
                <CustomLink className='naw-link' to='/blog'>Blog</CustomLink>
            </div>
        </header>


        <main className='container'>
            <Outlet/>
        </main>

        
        <footer className='footer'>
            <div className="content">
                footer
            </div>    
        </footer>
      
    </>
  )
}

export default DefaultLayout
