import { useState } from 'react'

function MovieCard({ movie, onDoubleClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      style={isHovered ? {...styles.card, ...styles.cardHover} : styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={onDoubleClick}
    >
      <img src={movie.image} alt={movie.title} style={styles.image} />
      <div style={isHovered ? {...styles.overlay, opacity: 1} : styles.overlay}>
        <h4 style={styles.title}>{movie.title}</h4>
        {isHovered && (
          <div style={styles.hoverContent}>
            <button style={styles.playButton}>▶ Play</button>
            <p style={styles.category}>{movie.category}</p>
            <p style={styles.hint}>Double-click for details</p>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  card: {
    position: 'relative',
    minWidth: '300px',
    height: '169px', // 16:9 aspect ratio (300 x 169)
    backgroundColor: '#333',
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.08)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '15px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    transition: 'opacity 0.3s',
    opacity: 0,
  },
  title: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  hoverContent: {
    marginTop: '5px',
  },
  playButton: {
    padding: '5px 12px',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '3px',
    fontSize: '11px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '6px',
  },
  category: {
    fontSize: '11px',
    color: '#46d369',
    textTransform: 'capitalize',
    marginTop: '4px',
  },
  hint: {
    fontSize: '9px',
    color: '#aaa',
    marginTop: '4px',
    fontStyle: 'italic',
  }
}

export default MovieCard
