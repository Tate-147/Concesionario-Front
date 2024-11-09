import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/users/login/Login'
import Logout from './pages/users/logout/Logout'
import Profile from './pages/users/profile/Profile'
import Register from './pages/users/register/Register'
import CreateCar from './pages/cars/create/CreateCar'
import ReadCar from './pages/cars/read/ReadCar'
import UpdateCar from './pages/cars/update/UpdateCar'
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cars/:idcar' element={<ReadCar />} />
        <Route path='/createcar' element={<CreateCar />} />
        <Route path='/updatecar/:idcar' element={<UpdateCar />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
