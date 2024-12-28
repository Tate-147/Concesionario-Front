const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a className="icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a className="icon">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a className="icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu-elem">
          <a className="menu-icon"> Inicio </a>
        </li>
        <li className="menu-elem">
          <a className="menu-icon"> Equipo </a>
        </li>
        <li className="menu-elem">
          <a className="menu-icon"> Contacto </a>
        </li>
        <li className="menu-elem">
          <a className="menu-icon"> Video </a>
        </li>
        <li className="menu-elem">
          <a className="menu-icon"> Sobre Nosotros </a>
        </li>
      </ul>
      <p className="text">© Copyright 2024 | Car Two | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;