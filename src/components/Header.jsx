import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../img/logo.png";

const Header = () => {
  const { isLogged, setIsLogged, userId, setUserId, setAccessToken, setRefreshToken } = useContext(AuthContext);
  const links = [{ to: "/", label:"Inicio" }];
  const linksLogin = [
      { to: "/cars", label:"Vehículos", className: "link-end" },
      { to: "/cars/create", label:"Agregar Vehículo", className: "link-end" },
      { to: "/mycars", label:"Mis Vehículos", className: "link-end" },
      { to: `/users/update/${userId}`, label:"Perfil", className: "link-end" } 
  ];
  const linksLogout = [
      { to: "/cars", label:"Vehículos", className: "link-end" },
      { to: "/users/login", label: "Iniciar Sesión", className: "link-end" },
      { to: "/users/create", label: "Registrarse", className: "link-end" }
  ];

  const handleLogout = () => {
    setIsLogged(false);
    setUserId(null);
    setAccessToken(null);
    setRefreshToken(null);
    toast.success("Cierre de Sesión Exitoso");
  };

    return (
      <nav className="contenedorNav">
        <div>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <img src={logo} width={100}  />
            </Link>
          ))}
        </div>
        <div>
          {isLogged && linksLogin.map((link) => (
            <Link key={link.to} to={link.to} className={"link"}>
              {link.label}
            </Link>
          ))}
          {isLogged && <Link to="/" onClick={() => handleLogout()} className={"link"}>Cerrar Sesion</Link>}
          {!isLogged && linksLogout.map((link) => (
            <Link key={link.to} to={link.to} className={"link"}>          
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  };
  
  export default Header;