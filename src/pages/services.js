import React from 'react';

function Services() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>✨ Servicio de Venta de Cuentas de Genshin Impact ✨</h1>
      <p style={styles.text}>
        ¿Buscas comenzar tu aventura en Teyvat con una cuenta poderosa? Ofrecemos cuentas con personajes de alto nivel y recursos exclusivos para que disfrutes al máximo de *Genshin Impact*. Calidad garantizada y soporte confiable.
      </p>
      <img 
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/genshin-impact-photograph1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" // Reemplaza esta URL con la de tu foto
        alt="Vista previa de cuenta de Genshin Impact"
        style={styles.image}
      />
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto 30px',
  },
  photoPlaceholder: {
    width: '300px',
    height: '300px',
    backgroundColor: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ccc',
    fontSize: '1rem',
    borderRadius: '10px',
    margin: '0 auto',
  },
};

export default Services;
