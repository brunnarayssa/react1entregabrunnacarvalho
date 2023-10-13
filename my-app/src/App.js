import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido/a CoderBook." />
            {/* Otros componentes o contenido */}
            <Footer />
        </div>
    );
}

export default App;
