import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/" style={styles.link}>Inicio</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/about" style={styles.link}>Sobre Nosotros</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/services" style={styles.link}>Servicios</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/contact" style={styles.link}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#222', // Fondo oscuro
    padding: '15px 0',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    display: 'inline',
    margin: '0 20px',
  },
  link: {
    textDecoration: 'none',
    color: '#4CAF50', // Verde brillante
    fontSize: '1.2rem',
    fontFamily: "'Poppins', sans-serif", // Fuente moderna
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
};

export default Menu;
