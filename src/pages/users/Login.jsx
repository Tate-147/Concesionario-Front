import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { setIsLogged, setUserId,setAccessToken,setRefreshToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginBack = async () => {
    const data = {
      username: username,
      password: password,
    }
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      const response = await handleLoginBack();
      const responsejson = await response.json();
      if(!response.ok){
        toast.error("Usuario o contraseña incorrectos");
      }else{
        toast.success("Inicio de Sesión Exitoso");
        setIsLogged(true);
        setUserId(responsejson.data.userId);
        setAccessToken(responsejson.data.accessToken);
        setRefreshToken(responsejson.data.refreshToken);
        navigate("/");
      }
    } else {
      toast.error("Usuario o contraseña vacios");
    }
  };

  return (
    <div className="containerlogin">
      <div className="wrapper">
        <form onSubmit={(e) => handleLogin(e)}>
          <h1>Iniciar Sesión</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" id="username" required onChange={(e) => setUsername(e.target.value)}/>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" id="password" required onChange={(e) => setPassword(e.target.value)}/>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/>Recuerdame</label>
            <a href="#">Olvido la contraseña?</a>
          </div>
          <button className="btn" type="submit" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
          <div className="register-link">
            <p>¿No tienes cuenta? <a href="/users/create">Registrarse</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;