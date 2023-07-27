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

import React, { useState, useEffect } from 'react';

const LibraryPlants = () => {
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    const fetchPopularCategories = async () => {
      try {
        const response = await fetch('https://api.trefle.io/v1/plants?token=Ow4uGim-Rx09V1ai0B-KqaaKe9h_JxHUr00wyNEOyRw');
        if (!response.ok) {
            console.error('Error al acceder a API', error);
        }
        const data = await response.json();
        setPopularCategories(data.data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchPopularCategories();
  }, []);

  return (
    <section>
      <h1>Library Plants</h1>
      <div className="library-plant-grid">
        {popularCategories.slice(0, 9).map((category) => (
          <div className="library-plant-item" key={category.id}>
            <img src={category.image_url} alt={category.common_name} />
            <p>{category.common_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibraryPlants;
