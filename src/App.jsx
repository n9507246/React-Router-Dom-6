import './App.css'
import { Routes, Route, Link } from 'react-router-dom' 
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/blog' element={ <Blog/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </>
  )
}

export default App
