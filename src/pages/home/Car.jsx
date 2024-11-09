import { useNavigate } from "react-router-dom"

const Car = ({car}) => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate(`/cars/${car.id}`)
    }
    return(
        <div className="carcontainer" onClick={handleClick}>
            <img src={car.urlToImage} alt={car.brand} className="carimg"/>
            <div>
                <h2>{car.brand}, {car.model}</h2>
                <h3>{car.year}</h3>
                <h4>{car.color}</h4>
                <h1>{car.price}</h1>
            </div>
        </div>
    )
}
export default Car