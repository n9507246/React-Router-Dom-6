import './App.css'
import { Routes, Route, Link } from 'react-router-dom' 
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'
import DefaultLayout from './components/layout/DefaultLayout'
import PostShow from './pages/PostShow/PostShow'

function App() {

  return (
    <>
      <Routes>
        <Route element={ <DefaultLayout/>}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/blog' element={ <Blog/> }/>
          <Route path='/posts/:id' element={ <PostShow/> }/>
          <Route path='*' element={ <NotFound/> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
