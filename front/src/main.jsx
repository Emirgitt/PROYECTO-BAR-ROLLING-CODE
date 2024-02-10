import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("No se encontró el elemento con el id 'root'.");
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error al renderizar la aplicación:', error);
  }
}
