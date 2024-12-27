import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //me faltaron los estilos

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
        />
    </AuthProvider>
);
