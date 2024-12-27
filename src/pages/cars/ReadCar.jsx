import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ReadCar = () => {
    const backurl = import.meta.env.VITE_BACK_URL;
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const fetchCar = async () => {
            const response = await fetch(`${backurl}cars/${id}`);
            const responsejson = await response.json();
            setCar(responsejson.data);
            setUser(responsejson.data.user);
        }
        fetchCar();
        
    },[])
    
    return (
        <div className="readcar">
            <h1>Detalle de la publicación</h1>
            <div className="readcarcontainer">
            <img src={car.urlToImage} alt={car.brand} className="readcarimg"/>
            <div>
                <h2>{car.brand}, {car.model}</h2>
                <h3>{car.year}</h3>
                <h4>{car.color}</h4>
                <h1>{car.price}</h1>
                <p>{car.description}</p>
            </div>
            <div>
                <h2>{user.lastname}, {user.name}</h2>
                <h3>{user.birthdate}</h3>
                <h4>{user.addressname}</h4>
                <h4>{user.addressnumber}</h4>
                <h4>{user.postcode}</h4>
                <h4>{user.city}</h4>
                <h4>{user.province}</h4>
                <h4>{user.country}</h4>
                <h4>{user.phone}</h4>
                <h4>{user.cellphone}</h4>
                <h4>{user.email}</h4>
            </div>
        </div>
        </div>
    )
}

export default ReadCar;