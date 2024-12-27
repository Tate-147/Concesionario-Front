import Cars from "../../components/Cars";
import HomeImg from "../../img/home-img.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="home">
                <h3>Encuentra tu Usado!</h3>
                <img src={HomeImg} alt=""/>
            </div>
            <div className="home2">
                <Cars 
                filters={{
                    limit: "6"
                }}
                />
                <button className="btn" onClick={() => navigate("/cars")} >Ver Mas</button>
            </div>
            <div className="services">
                <h1>Nuestros Servicios</h1>
                <div className="cen">
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Seguros</h2>
                        <p>Elegí el seguro de tu auto y cotizalo con asistencia mecánica y remolque (100% digital).</p>
                    </div>
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Carrocería</h2>
                        <p>Solución integral para nuestros clientes ante un eventual siniestro de sus vehículos.</p>
                    </div>
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Talleres y Repuestos</h2>
                        <p>Profesionales altamente calificados con repuestos originales.</p>
                    </div>
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Neumáticos</h2>
                        <p>Para todas las gamas de vehículos y los servicios de alineación y balanceo.</p>
                    </div>
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Financiación</h2>
                        <p>Financia tu auto de hasta 10 años de antigüedad, con mínimos requisitos.</p>
                    </div>
                    <div className="service">
                        <i className='bx bxs-user'></i>
                        <h2>Asistencia Personal</h2>
                        <p>Escribano permanente que te garantizará toda la documentación vehicular.</p>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Home;