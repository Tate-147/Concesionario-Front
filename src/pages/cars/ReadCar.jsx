import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ReadCar = () => {
    const backurl = import.meta.env.VITE_BACK_URL;
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchCar = async () => {
            const response = await fetch(`${backurl}cars/${id}`);
            const responsejson = await response.json();
            setCar(responsejson.data);
            setUser(responsejson.data.user);
            setIsLoading(false);
        }
        fetchCar();
        
    },[])
    
    if (isLoading) {
        return (
            <div className="loader">
                <div className="loading" id="loading"/>
            </div>
        )
    }

    return (
        <div className="readcar">
            <h1>Detalle de la publicación</h1>
            <div className="readcarcontainer">
                <img src={car.urlToImage} alt={car.brand} className="readcarimg"/>
            <div>
                <h1>{car.brand}, {car.model}</h1>
                <h2>{car.year}</h2>
                <h3>{car.color}</h3>
                <h1>$ {car.price}</h1>
                <p>{car.description}</p>
            </div>
            <div>
                <h1><i className='bx bxs-user'></i> {user.lastname}, {user. name}</h1>
                <h2><i className='bx bxs-home'></i> {user.addressname}, {user.addressnumber} ({user.postcode})</h2>
                <h3><i className='bx bxs-map'></i> {user.city}, {user.province}, {user.country}</h3>
                <h1><i className='bx bxs-phone'></i> {user.phone}</h1>
                <h2><i className='bx bxs-phone'></i> {user.cellphone}</h2>
                <h3><i className='bx bxs-envelope'></i> {user.email}</h3>
            </div>
        </div>
        </div>
    )
}

export default ReadCar;