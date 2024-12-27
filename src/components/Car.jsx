import { useNavigate, useLocation } from "react-router-dom";

const Car = ({car, handleDelete}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick=()=>{
        navigate(`/cars/${car.id}`)
    };

    const updateCar = (id) => {
        if (window.confirm("¿Seguro que quieres modificar esta publicación?")) {
            navigate(`/cars/update/${id}`);
        };
    };

    const deleteCar = (id) => {
        if (window.confirm("¿Seguro que quieres eliminar esta publicación?")) {
            handleDelete(id);
        };
    };

    return(
        <div className="carcontainer" onClick={handleClick}>
            <img src={car.urlToImage} alt={car.brand} className="carimg"/>
            <div>
                <h2>{car.brand}, {car.model}</h2>
                <h3>{car.year}</h3>
                <h4>{car.color}</h4>
                <h1>$ {car.price}</h1>
            </div>
            {(location.pathname === "/mycars") &&
            <div>
                <button onClick={(e) => {e.stopPropagation(), updateCar(car.id)}}> Modificar</button>
                <button onClick={(e) => {e.stopPropagation(), deleteCar(car.id)}}> Eliminar</button>
            </div>
            }
        </div>
    )
}
export default Car;