import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


const UpdateCar = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [urlToImage, setUrlToImage] = useState("");
  const { userId, accessToken, handleRefreshToken } = useContext(AuthContext);
  const navigate = useNavigate();

  //Fetch Car Data
  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}cars/${id}`);
      const responsejson = await response.json();
      setBrand(responsejson.data.brand);
      setModel(responsejson.data.model);
      setColor(responsejson.data.color);
      setYear(responsejson.data.year);
      setDescription(responsejson.data.description);
      setPrice(responsejson.data.price);
      setUrlToImage(responsejson.data.urlToImage);
    };
    fetchCar();
  },[])

  const handleUpdateCar = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}cars/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify(data),
    });
    return response;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      brand === "" ||
      model === "" ||
      color === "" ||
      year === "" ||
      description === "" ||
      price === "" ||
      urlToImage === ""
    ) {
      toast.error("Complete los campos para continuar");
    } else {
        const data = {
          brand: brand,
          model: model,
          color: color,
          year: year,
          description: description,
          price: price,
          urlToImage: urlToImage,
          user: userId
        }
        const result = await handleUpdateCar(data);
        switch (result.status) {
          case 200:
            toast.success("Publicación modificada con exito");
            navigate("/mycars");
            break;
          case 400:
            toast.error("Datos mal ingresados");
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
    }
  };

  return (
      <div className="containercreatecar">
        <div className="wrapper3">
            <form className="formcreatecar" onSubmit={handleSubmit}>
                <h1>Modificar publicación</h1>
                <div className="input-box-column">
                    <input type="text" placeholder="Marca" id="brand" value={brand} required onChange={(e) => setBrand(e.target.value)}/>
                    <i className='bx bxs-car'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Modelo" id="model" value={model} required onChange={(e) => setModel(e.target.value)}/>
                    <i className='bx bxs-car'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Color" id="color" value={color} required onChange={(e) => setColor(e.target.value)}/>
                    <i className='bx bxs-palette'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Año" id="year" value={year} required onChange={(e) => setYear(e.target.value)}/>
                    <i className='bx bxs-cake'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Precio" id="price" value={price} required onChange={(e) => setPrice(e.target.value)}/>
                    <i className='bx bxs-dollar-circle'></i>
                </div>
                <div className="input-box-column">
                    <input type="url" placeholder="Url a la imagen" id="urlToImage" value={urlToImage} required onChange={(e) => setUrlToImage(e.target.value)}/>
                    <i className='bx bxs-image'></i>
                </div>
                <span className="input-box-column2">
                    <input type="text" placeholder="Descripción" id="description" value={description} required onChange={(e) => setDescription(e.target.value)}/>
                    <i className='bx bxs-message'></i>
                </span>
                <button className="btn" type="submit">Publicar</button>
            </form>
        </div>
    </div>
  );
};

export default UpdateCar;