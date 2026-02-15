function MovieModal({ movie, onClose, onAddToList }) {
  if (!movie) return null

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>✕</button>
        
        <img src={movie.image} alt={movie.title} style={styles.image} />
        
        <div style={styles.content}>
          <h2 style={styles.title}>{movie.title}</h2>
          <p style={styles.category}>{movie.category}</p>
          <p style={styles.description}>{movie.description}</p>
          
          <div style={styles.buttons}>
            <button style={styles.playButton}>▶ Play</button>
            <button style={styles.addButton} onClick={() => onAddToList(movie)}>
              + Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#181818',
    borderRadius: '8px',
    maxWidth: '850px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#181818',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
  content: {
    padding: '30px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  category: {
    fontSize: '16px',
    color: '#46d369',
    textTransform: 'capitalize',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#d2d2d2',
    marginBottom: '30px',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
  },
  playButton: {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addButton: {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(109, 109, 110, 0.7)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '4px',
    cursor: 'pointer',
  }
}

export default MovieModal