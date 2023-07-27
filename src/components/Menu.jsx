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

import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { PiPlantBold } from "react-icons/pi";

const Menu = ({ onMenuClick }) => {
  return (  
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" onClick={() => onMenuClick('home')}> {/**/}
            <FaHome className="menu-icon" />
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#about-section">
            <FaInfoCircle className="menu-icon" />
            About...
          </a>
        </li>
        <li className="menu-item">
          <a href="#" onClick={() => onMenuClick('library')}> {/**/}
            <PiPlantBold className="menu-icon" />
            Library Plants
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <FaEnvelope className="menu-icon" />
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;


/* import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { PiPlantBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Menu = () => {
  return (  
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#">
            <FaHome className="menu-icon" />
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#about-section">
            <FaInfoCircle className="menu-icon" />
            About...
          </a>
        </li>
        <li className="menu-item">
          <a href="/library-plants">
            <PiPlantBold className="menu-icon" />
            Library Plants
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <FaEnvelope className="menu-icon" />
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
 */