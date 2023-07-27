/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                Proyecto  Final                   ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 26 de julio de 2023               ║
╚══════════════════════════════════════════════════╝
*/

import { useState } from 'react';
import './App.css';
import styles from "./css/styles.css?modules";
import React from 'react';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';
import LibraryPlants from './components/LibraryPlants'; // Agregamos la importación del nuevo componente

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Slider />
            <Categories />
            <About />
            <Footer />
          </>
        );
      case 'library':
        return <LibraryPlants />;
      default:
        return (
          <>
            <Slider />
            <Categories />
            <About />
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      <div>
        <Menu onMenuClick={handleMenuClick} />
      </div>
      <div>
        {renderPage()}
      </div>      
    </>
  )
}

export default App;



/* import { useState } from 'react';
import './App.css';
import styles from "./css/styles.css?modules";
import React from 'react';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Slider />
        <Categories />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
 */