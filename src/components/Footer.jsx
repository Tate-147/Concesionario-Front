import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="titulo">Sobre Nosotros</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id corrupti
        voluptas mollitia ullam deserunt veritatis fuga cumque excepturi
        voluptates reprehenderit, voluptatum consectetur voluptatem architecto
        quibusdam neque dicta debitis voluptate? Nisi.
      </p>
      <div className="links">
        <div className="enlaces">
          <h3>Enlaces Utiles</h3>
          <ul className="listaEnlaces">
            <li className="listItem">
              <a href="">Contacto</a>
            </li>
            <li className="listItem">
              <a href="">Terminos y condiciones</a>
            </li>
          </ul>
        </div>
        <div className="redes">
          <h3>Redes Sociales</h3>
          <ul className="listaEnlaces">
            <li className="listItem">
              <a href="">
                <FontAwesomeIcon icon={faTwitter} className="icono" />
              </a>
            </li>
            <li className="listItem">
              <a href="">
                <FontAwesomeIcon icon={faFacebook} className="icono" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contmensaje">
        <p className="mensaje">&copy; 2024 Tu Sitio de Blogs. Todos los derechos reservados.🙃</p>
      </div>
    </div>
  );
};

export default Footer;