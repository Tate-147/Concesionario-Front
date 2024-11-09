import {carsMock} from "../../mocks/carsMock"
import { useState, useEffect } from "react"
import Car from "./Car"

const Home = () => {
    const [cars, setcars] = useState(carsMock)
    return(
        <div>
            <section className="hero">
                <div className="contenido-hero">
                    <h2>Concesionario de Autos</h2>
                    <div className="ubicacion">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffc107" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <p>Pigüé, Buenos Aires</p>
                    </div>
                    <a className="boton" href="#">Contactar</a>
                </div>
            </section>
            <section className="container">
                {cars.map((car)=>(<Car className="childcontainer" car={car} key={car.id}/>))}
            </section>
        </div>
    )
}
export default Home