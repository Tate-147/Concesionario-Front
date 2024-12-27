import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = () => {
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
  const navigate = useNavigate();

  const handleCreateUser = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}users`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        const result = await handleCreateUser(data);
        switch (result.status) {
          case 201:
            toast.success("Usuario creado con exito");
            navigate("/");
            break;
          case 400:
            toast.error("Datos mal ingresados");
            break;
          case 500:
            toast.error("Usuario ya existente o error interno del servidor");
            break;
          default:
            toast.error("Ha ocurrido un error inesperado");
        }
      } else {
        toast.error("Las contraseñas no coinciden");
      }
    }
  };

  return (
    <div className="containerregister">
        <div className="wrapper2">
            <form className="formregister" onSubmit={handleSubmit}>
                <h1>Registrarse</h1>
                <div className="input-box-column">
                    <input type="text" placeholder="Usuario" id="username" required onChange={(e) => setUsername(e.target.value)}/>
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
                    <input type="text" placeholder="Apellido" id="lastname" required onChange={(e) => setLastname(e.target.value)}/>
                    <i className='bx bxs-user-plus'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Nombre" id="name" required onChange={(e) => setName(e.target.value)}/>
                    <i className='bx bxs-user-plus'></i>
                </div>
                <div className="input-box-column">
                    <input type="Date" placeholder="Fecha de Nacimiento" id="birthdate" required onChange={(e) => setBirthdate(e.target.value)}/>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Dirección Calle" id="addressname" required onChange={(e) => setAddressname(e.target.value)}/>
                    <i className='bx bxs-home'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Dirección Num" id="addressnumber" required onChange={(e) => setAddressnumber(e.target.value)}/>
                    <i className='bx bxs-home'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Código Postal" id="postcode" required onChange={(e) => setPostcode(e.target.value)}/>
                    <i className='bx bxs-inbox'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Ciudad" id="city" required onChange={(e) => setCity(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Provincia" id="province" required onChange={(e) => setProvince(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="País" id="country" required onChange={(e) => setCountry(e.target.value)}/>
                    <i className='bx bxs-map'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Teléfono" id="phone" required onChange={(e) => setPhone(e.target.value)}/>
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="input-box-column">
                    <input type="text" placeholder="Celular" id="celphone" required onChange={(e) => setCellphone(e.target.value)}/>
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="input-box-column">
                    <input type="email" placeholder="Correo Electrónico" id="email" required onChange={(e) => setEmail(e.target.value)}/>
                    <i className='bx bxs-envelope'></i>
                </div>
                <button className="btn" type="submit">Registrarse</button>
            </form>
        </div>
    </div>
  );
};

export default CreateUser;