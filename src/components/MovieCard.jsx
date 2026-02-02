function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <img src={movie.image} alt={movie.title} style={styles.image} />
      <div style={styles.overlay}>
        <h4 style={styles.title}>{movie.title}</h4>
      </div>
    </div>
  )
}

const styles = {
  card: {
    position: 'relative',
    minWidth: '200px',
    height: '300px',
    backgroundColor: '#333',
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '10px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  },
  title: {
    fontSize: '14px',
    fontWeight: '600',
  }
}

export default MovieCard