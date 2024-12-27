import Cars from "../../components/Cars";
import { useState, useEffect } from "react";

const ListCars = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [orderby, setOrderby] = useState("");
    const [order, setOrder] = useState("");
    const [limit, setLimit] = useState("");
    const [page, setPage] = useState("");
    const [reload, setReload] = useState();

    useEffect(() => {
        setReload(true);
    }, [reload]);

     const handleSubmit = async(e) => {
        e.preventDefault();
        setReload(false);
    };

    return(
        <div className="listcars">
            <h1>Vehículos</h1>
            <form className="filters" onSubmit={handleSubmit}>
                <h2>Filtros</h2>
                <div className="filter-item">
                    <input type="text" placeholder="Marca" onChange={(e) => setBrand(e.target.value)}/>
                    <input type="text" placeholder="Modelo" onChange={(e) => setModel(e.target.value)}/>
                </div>
                <div className="filter-item">
                    <input type="text" placeholder="Precio Mínimo" onChange={(e) => setMinPrice(e.target.value)}/>
                    <input type="text" placeholder="Precio Máximo" onChange={(e) => setMaxPrice(e.target.value)}/>
                </div>
                <div className="filter-item">
                    <select name="orderby" defaultValue="" onChange={(e) => setOrderby(e.target.value)}>
                        <option value="" disabled>Ordenar por</option>
                        <option value="brand">Marca</option>
                        <option value="model">Modelo</option>
                        <option value="year">Año</option>
                        <option value="color">Color</option>
                        <option value="price">Precio</option>
                    </select>
                    <select name="order" defaultValue="" onChange={(e) => setOrder(e.target.value)}>
                        <option value="" disabled>Orden</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>
                <div className="filter-item">
                    <input type="text" placeholder="Cantidad por página" id="limit" onChange={(e) => setLimit(e.target.value)}/>
                    <button type="submit">Buscar</button>
                </div>
            </form>
            <>
                {reload && <Cars filters={{brand, model, minPrice, maxPrice, orderby, order, limit, page}} />}
            </>
        </div>
    )
}
export default ListCars;