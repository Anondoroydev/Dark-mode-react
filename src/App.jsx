
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './assets/components/Home'
import Rootlayout from './Rootlayout/Rootlayout'
import About from './assets/components/About'
import Blog from './assets/components/Blog'
import Login from './assets/components/Login'
function App() {

  return (
    <>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
