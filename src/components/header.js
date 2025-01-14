import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>✨ Proyecto Genshin Impact Incoming... ✨</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1a1a1a', // Un gris oscuro para combinar con negro
    color: '#ffffff', // Texto en blanco para contraste
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: '2px solid #4CAF50', // Línea verde brillante para destacar
  },
  title: {
    fontSize: '2.5rem',
    fontFamily: "'Poppins', sans-serif", // Fuente moderna
    margin: '0',
    color: '#4CAF50', // Verde brillante para un toque especial
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Sombra para darle profundidad
  },
};

export default Header;
