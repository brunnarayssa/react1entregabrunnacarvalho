import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: "#0a0a23",  // Cambiado a azul oscuro
        color: "white",              // Cambia el color del texto a blanco para mejor visibilidad
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} CooderBook. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
