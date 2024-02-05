import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import './App.css'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Search from './pages/Search'
import Follows from './pages/Follows'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import LogOut from './pages/LogOut'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/follows' element={<Follows />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/logout' element={<LogOut />} />
    </Route>
  )
)

//const router diatas dipindahkan ke app
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
