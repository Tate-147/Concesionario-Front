import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Car from "./Car";

const Cars = ( { filters } ) => {
    const apiUrl = import.meta.env.VITE_BACK_URL + "cars";
    let apiFilters = "" 
    const location = useLocation();
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading,setIsLoading] = useState(true);
    const { accessToken, handleRefreshToken } = useContext(AuthContext);    

    const fetchCars = async () => {
        if (filters) {
            if (filters.user) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `user=${filters.user}`;
            }
            if (filters.brand) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `brand=${filters.brand}`;
            }
            if (filters.model) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `model=${filters.model}`;
            }
            if (filters.minPrice) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `minPrice=${filters.minPrice}`;
            }
            if (filters.maxPrice) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `maxPrice=${filters.maxPrice}`;
            }
            if (filters.orderby) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `orderby=${filters.orderby}`;
            }
            if (filters.order) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `order=${filters.order}`;
            }
            if (filters.limit) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `limit=${filters.limit}`;
            }
            if (filters.page) {
                if (apiFilters === "") { apiFilters = "?" } else { apiFilters += "&" } 
                apiFilters += `page=${filters.page}`;
            }
        }
        const response = await fetch(`${apiUrl + apiFilters}`);
        const responsejson = await response.json();
        setCars(responsejson.data.cars);
        setCurrentPage(responsejson.data.currentPage);
        setTotalPages(responsejson.data.totalPages);
        setIsLoading(false);
    }

    const handleNext = () => {
        filters.page = currentPage + 1;
        setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        filters.page = currentPage - 1;
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {  
        fetchCars();
    }, [currentPage]);

    const fetchDeleteCar = async (id) => {
        const response = await fetch(`${apiUrl}/${id}`, { 
          method: "DELETE",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": accessToken
          },
         })
      switch (response.status) {
        case 200:
            toast.success("Publicación eliminada con exito");
            fetchCars();
            break;
        case 401:
            const res = await handleRefreshToken();
            if(res === -1){
                toast.error("Sesión expirada");
                navigate("/users/login");
                break;
            } else {
                toast.success("Sesión renovada, intente nuevamente");
                break;
            }
        case 500:
            toast.error("Error interno del servidor");
            break;
        default:
            toast.error("Ha ocurrido un error inesperado");
        }
    };

    const handleDelete = (id) => {
        fetchDeleteCar(id); 
    };

    if (isLoading) {
        return (
            <div className="loader">
                <div className="loading" id="loading"/>
            </div>
        )
    }

    return (    
        <div>
            {(location.pathname === "/cars" || location.pathname === "/") &&
            <div className="container">
                {cars.map((car)=>(<Car className="childcontainer" car={car} key={car.id}/>))}
            </div>
            }
            {(location.pathname === "/mycars") &&
            <div className="container">
                {cars.map((car)=>(<Car className="childcontainer" car={car} key={car.id} handleDelete={handleDelete}/>))}
            </div>
            }
            {(location.pathname === "/cars" || location.pathname === "/mycars") && 
            <div className="pagination">
                <div className="pagination-item">
                    <button onClick={handlePrev} disabled={currentPage === 1}>Anterior</button>
                </div>
                <div className="pagination-item">
                    <p>Página {currentPage} de {totalPages}</p>
                </div>
                <div className="pagination-item">
                    <button onClick={handleNext} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            </div>
            }    
        </div>
    )
}
                
export default Cars;