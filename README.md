# Proy. de Programación Web - Aplicación SPA con React

Esta es una aplicación web desarrollada como trabajo práctico integrador en el marco de la asignatura de Programación Web. La aplicación es una SPA (Single Page Application) construida en React y permite realizar un CRUD completo sobre dos entidades:
una entidad principal y una entidad de soporte.

## Concesionario de Autos - FRONT

Elegimos como proyecto el diseño de una página web para un concesionario de coches.

## Funcionalidades Principales 📋

1. Autenticación
    * Login: Interfaz de inicio de sesión de usuario.
    * Registro: Pantalla de creación de cuenta.

2. Módulo de ABMC (Alta, Baja, Modificación, Consulta)
    * Entidades: cuenta con una entidad principal y una de soporte.
        * Entidad Principal: Users
        * Entidad Soporte: Cars

3. Navegación SPA

```javascript
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/create' element={<CreateUser />} />
        <Route path='/users/update/:id' element={<UpdateUser />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/cars' element={<ListCars />} />
        <Route path='/mycars' element={<MyCars />} />
        <Route path='/cars/:id' element={<ReadCar />} />
        <Route path='/cars/create' element={<CreateCar />} />
        <Route path='/cars/update/:id' element={<UpdateCar />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
```

4. Uso de Hooks
    * Hooks de React: useState, useEffect y useContext.
    * Hooks de React Router: useParams, useNavigate.

## Tecnologías Utilizadas 🛠

* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código fuente gratuito, multiplataforma y de código abierto.
* [Vite](https://es.vitejs.dev/) - Herramienta de desarrollo web ultrarrápida que se integra perfectamente con los frameworks Vue, React y Svelte.
* [React](https://es.react.dev/) - Librería de JavaScript de código abierto que se utiliza para crear interfaces de usuario.
* [Node.js](https://nodejs.org/en/) - Entorno de ejecución de JavaScript de código abierto y multiplataforma.

## Despliegue 📦

* Concesionario de Autos - FRONT - https://concesionario-front-lemon.vercel.app/
* [Vercel](https://vercel.com/) - plataforma de desarrollo y alojamiento de aplicaciones web y sitios web basada en la nube.

## Versionado 📌

* Usamos [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Tate-147/Concesionario-Front/tags).

## Estructura del Proyecto 📄

![Estructura del proyecto](/src/img/Estructura.jpg "Estructura del Proyecto.")

## Instrucciones de Uso 🔧

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

#### Clonar el repositorio

Para clonar este repositorio de GitHub en Visual Studio Code, puedes seguir estos pasos:

1. Abrir la paleta de comandos con la combinación de teclas **ctrl + Mayús + P**
2. Escribir **gitcl** en el símbolo de la paleta de comandos
3. Seleccionar el comando **Git: Clone**
4. Seleccionar **Clonar desde GitHub** y presionar Entrar
5. Copiar y Pegar la URL del repositorio (https://github.com/Tate-147/Concesionario-Front.git)
6. Seleccionar (o crear) el directorio local en el que se desea clonar el proyecto
7. Seleccionar como destino del repositorio
8. Abrir cuando se reciba la notificación que pregunta si se desea abrir el repositorio clonado

#### Instalar dependencias

Para instalar las dependencias NPM (Node Package Manager)

1. Abrir la Terminal con la combinación de teclas **ctrl + Mayús + ñ**
2. Escribir **npm install** en el directorio raíz del paquete

#### Iniciar el servidor de desarrollo

Para iniciar un servidor de desarrollo

1. Abrir la Terminal con la combinación de teclas **ctrl + Mayús + ñ**
2. Escribir **npm run dev** en el directorio raíz del paquete

## Imágenes de la aplicación

![Página Home](/src/img/HomeC.jpg "Página Home")
![Página Vehículos](/src/img/Vehiculos.jpg "Página Vehículos")
![Página Login](/src/img/Login.jpg "Página Login")

## Contribuidores ✒️

* **Mauro Pereyra** - *Curso Desarrollo Web Full Stack*
* **Santiago Zaffora** - *Curso Desarrollo Web Full Stack*