import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [addressname, setAddressname] = useState("");
  const [addressnumber, setAddressnumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken, handleRefreshToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const getresult = await fetch(`${import.meta.env.VITE_BACK_URL}users/${id}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": accessToken
        },
      });
      switch (getresult.status) {
        case 200:
            const getresultjson = await getresult.json();
            setUsername(getresultjson.data.username);
            setLastname(getresultjson.data.lastname);
            setName(getresultjson.data.name);
            const date = new Date(getresultjson.data.birthdate);
            setBirthdate(date.toISOString().split('T')[0]); 
            setAddressname(getresultjson.data.addressname);
            setAddressnumber(getresultjson.data.addressnumber);
            setPostcode(getresultjson.data.postcode);
            setCity(getresultjson.data.city);
            setProvince(getresultjson.data.province);
            setCountry(getresultjson.data.country);
            setPhone(getresultjson.data.phone);
            setCellphone(getresultjson.data.cellphone);
            setEmail(getresultjson.data.email);
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
    fetchUser();
  }, []);

  const handleUpdateUser = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}users/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      username === "" ||
      password === "" ||
      password2 === "" ||
      lastname === "" ||
      name === "" ||
      birthdate === "" ||
      addressname === "" ||
      addressnumber === "" ||
      postcode === "" ||
      city === "" ||
      province === "" ||
      country === "" ||
      phone === "" ||
      cellphone === ""
    ) {
      toast.error("Complete los campos para continuar");
    } else {
      if (password === password2) {
        const data = {
          username: username,
          password: password,
          lastname: lastname,
          name: name,
          birthdate: birthdate,
          addressname: addressname,
          addressnumber: addressnumber,
          postcode: postcode,
          city: city,
          province: province,
          country: country,
          phone: phone,
          cellphone: cellphone,
          email: email
        };
        const result = await handleUpdateUser(data);
        switch (result.status) {
            case 200:
              toast.success("Usuario modificado con exito");
              navigate("/");
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
              toast.error("Usuario ya existente o error interno del servidor");
              break;
            default:
              toast.error("Ha ocurrido un error inesperado");
          }
      }
    }
  };

  return (
    <div className="containerregister">
        <div className="wrapper2">
            <form className="formregister" onSubmit={handleSubmit}>
                <h1>Perfil</h1>
                <div className="input-box-column">
                    <input type="text" placeholder="Usuario" id="username" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box-column">
                    <input type="password" placeholder="Contraseña" id="password" required onChange={(e) => setPassword(e.target.value)}/>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="input-box-column">
                    <input type="password" placeholder="Repetir Contraseña" id="password2" required onChange={(e) => setPassword2(e.target.value)}/>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Apellido" id="lastname" value={lastname} required onChange={(e) => setLastname(e.target.value)}/>
                    <i className='bx bxs-user-plus'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Nombre" id="name" value={name} required onChange={(e) => setName(e.target.value)}/>
                    <i className='bx bxs-user-plus'></i>
                </div>
                <div className="input-box-column">
                    <input type="Date" placeholder="Fecha de Nacimiento" id="birthdate" value={birthdate} required onChange={(e) => setBirthdate(e.target.value)}/>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Dirección Calle" id="addressname" value={addressname} required onChange={(e) => setAddressname(e.target.value)}/>
                    <i className='bx bxs-home'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Dirección Num" id="addressnumber" value={addressnumber} required onChange={(e) => setAddressnumber(e.target.value)}/>
                    <i className='bx bxs-home'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Código Postal" id="postcode" value={postcode} required onChange={(e) => setPostcode(e.target.value)}/>
                    <i className='bx bxs-inbox'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Ciudad" id="city" value={city} required onChange={(e) => setCity(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Provincia" id="province" value={province} required onChange={(e) => setProvince(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="País" id="country" value={country} required onChange={(e) => setCountry(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Teléfono" id="phone" value={phone} required onChange={(e) => setPhone(e.target.value)}/>
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Celular" id="celphone" value={cellphone} required onChange={(e) => setCellphone(e.target.value)}/>
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="input-box-column">
                    <input type="email" placeholder="Correo Electrónico" id="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    <i className='bx bxs-envelope'></i>
                </div>
                <button className="btn" type="submit">Guardar</button>
            </form>
        </div>
    </div>
  );
};

export default UpdateUser;