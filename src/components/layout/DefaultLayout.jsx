import { Link, Outlet } from 'react-router-dom' 

function DefaultLayout() {

  return (
    <>
        <header>
            <div className="naw">
            <Link className='naw-link' to='/'>Home</Link>
            <Link className='naw-link' to='/about'>About</Link>
            <Link className='naw-link' to='/blog'>Blog</Link>
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
