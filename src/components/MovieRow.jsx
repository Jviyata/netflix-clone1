import { useRef } from 'react'
import './MovieRow.css'

function MovieRow({ title, movies, onMovieClick, onAddToList }) {
  const scrollContainer = useRef(null)

  const scroll = (direction) => {
    const container = scrollContainer.current
    const scrollAmount = 300
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
      // Loop back to beginning when reaching the end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }
    }
  }

  const handleScroll = (e) => {
    const container = e.target
    // Auto-loop: when scrolled to end, restart from beginning
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
      setTimeout(() => {
        container.scrollLeft = 0
      }, 300)
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.rowWrapper}>
        <button onClick={() => scroll('left')} style={styles.scrollButton}>❮</button>
        <div 
          ref={scrollContainer}
          style={styles.movieRow}
          onScroll={handleScroll}
        >
          {movies.map(movie => (
            <div key={movie.id} style={styles.movieCard}>
              <img 
                src={movie.image} 
                alt={movie.title}
                style={styles.movieImage}
                onClick={() => onMovieClick(movie)}
              />
              {onAddToList && (
                <button 
                  onClick={() => onAddToList(movie)}
                  style={styles.addButton}
                >
                  + Add to List
                </button>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} style={styles.scrollButton}>❯</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px 0',
  },
  title: {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#fff',
    paddingLeft: '50px',
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  movieRow: {
    display: 'flex',
    gap: '10px',
    overflow: 'x',
    scrollBehavior: 'smooth',
    flex: 1,
  },
  movieCard: {
    minWidth: '250px',
    position: 'relative',
    cursor: 'pointer',
  },
  movieImage: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '4px',
    transition: 'transform 0.3s',
  },
  scrollButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '20px',
    borderRadius: '4px',
  },
  addButton: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    padding: '8px',
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    opacity: 0,
    transition: 'opacity 0.3s',
  }
}

export default MovieRow