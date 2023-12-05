import './index.css'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'
import DefaultLayout from './components/layout/DefaultLayout'
import PostShow from './pages/PostShow/PostShow'
import PostCreate from './pages/PostCreate/PostCreate'
import Login from './pages/Login/Login'

import RequireAuth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'
function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={ <DefaultLayout/>}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/blog' element={ <Blog/> }/>
          <Route path='/posts/:id' element={ <PostShow/> }/>
          <Route path='/post/create' element={ 
              <RequireAuth>
                <PostCreate/>
              </RequireAuth>
          }/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='*' element={ <NotFound/> }/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
