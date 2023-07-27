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

const About = () => {
  return (
    <section id='about-section' className='about-section'>
        <h3>About Our Website</h3>
        <section className="about">
            <p>Welcome to our plant paradise! Explore a vast collection of plants from around the world. 
                Our mission is to inspire and uplift lives through the wonders of nature. With a user-friendly 
                interface and the latest API technology, we provide accurate and valuable plant information. 
                Discover unique species, learn best practices, and embrace a greener lifestyle. 
                Join our community of plant enthusiasts and let's grow together!</p>
            <p>At our website, plants come to life with captivating visuals and insightful descriptions. 
                We aim to build a vibrant community where you can share your gardening journey, exchange tips, and find inspiration. 
                Let the beauty and serenity of plants bring joy to your everyday life. 
                Together, let's cultivate a greener, more harmonious world. Happy gardening!
            </p>
        </section>
    </section>
  );
};

export default About;
