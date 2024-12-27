import "./styles/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateUser from './pages/users/CreateUser';
import UpdateUser from './pages/users/UpdateUser';
import Login from './pages/users/Login';
import ListCars from './pages/cars/ListCars';
import MyCars from './pages/cars/MyCars';
import ReadCar from './pages/cars/ReadCar';
import CreateCar from './pages/cars/CreateCar';
import UpdateCar from './pages/cars/UpdateCar';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/create' element={<CreateUser />} />
        <Route path='/users/update/:id' element={<UpdateUser />} />
        <Route path='/users/login' element={<Login />} />

        <Route path='/cars' element={<ListCars />} />
        <Route path='/mycars' element={<MyCars />} />
        <Route path='/cars/:id' element={<ReadCar />} />
        <Route path='/cars/create' element={<CreateCar />} />
        <Route path='/cars/update/:id' element={<UpdateCar />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
