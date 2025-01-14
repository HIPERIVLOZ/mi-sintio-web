import React from 'react';

function Home() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>🌌 Bienvenido al Mundo de Genshin Impact 🌌</h1>
      <p style={styles.text}>
        Adéntrate en Teyvat, un vasto mundo lleno de magia, misterios y aventuras épicas. 
        Descubre las historias de sus personajes, explora reinos asombrosos y desata el poder de los elementos.
      </p>
      <div style={styles.photoContainer}>
        <div style={styles.photoPlaceholder}>📸 Espacio para Foto 1</div>
        <div style={styles.photoPlaceholder}>📸 Espacio para Foto 2</div>
        <div style={styles.photoPlaceholder}>📸 Espacio para Foto 3</div>
      </div>
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
  photoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  photoPlaceholder: {
    width: '200px',
    height: '200px',
    backgroundColor: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ccc',
    fontSize: '1rem',
    borderRadius: '10px',
  },
};

export default Home;
