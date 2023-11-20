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
            <p>
                CoderBook es una comunidad en línea diseñada específicamente para apasionados de la programación y la tecnología.
                Nuestra plataforma te ofrece un espacio para conectar con otros desarrolladores, compartir tus conocimientos,
                explorar una amplia variedad de contenido relacionado con la programación, y colaborar en proyectos emocionantes.
            </p>
            <p>
                ¿Eres nuevo en la programación? No te preocupes, en CoderBook, también ofrecemos recursos educativos y tutoriales
                para ayudarte a comenzar tu viaje de aprendizaje. Puedes seguir a tus desarrolladores favoritos, unirte a grupos de
                discusión, y estar al tanto de las últimas tendencias tecnológicas.
            </p>
            <p>
                Únete a nuestra creciente comunidad de programadores y descubre un lugar donde puedes aprender, crecer y compartir
                tu pasión por la tecnología. ¡Estamos emocionados de tenerte aquí en CoderBook!
            </p>
            <Footer />
        </div>
    );
}

export default App;
