import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Search from './pages/Search'
import Follows from './pages/Follows'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import LogOut from './pages/LogOut'
import Login from './pages/Login'
import Register from './pages/Register'


const loginRegisterRoutes = (
  <>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </>
);


const mainRoutes = (
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='/search' element={<Search />} />
    <Route path='/follows' element={<Follows />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/create-post' element={<CreatePost />} />
    <Route path='/logout' element={<LogOut />} />
  </Route>
);


const allRoutes = createRoutesFromElements(
  <>
    {loginRegisterRoutes}
    {mainRoutes}
  </>
);

const router = createBrowserRouter(allRoutes);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
