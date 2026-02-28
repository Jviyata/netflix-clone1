import { useRef } from 'react'
import MovieCard from './MovieCard'
import './MovieRow.css'

function MovieRow({ title, movies, onMovieClick, onAddToList, onViewAll }) {
  const scrollContainer = useRef(null)
  
  // Duplicate movies for infinite scroll effect
  const displayMovies = [...movies, ...movies]

  const scroll = (direction) => {
    const container = scrollContainer.current
    const scrollAmount = 300
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }

  const handleScroll = (e) => {
    const container = e.target
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
      container.scrollLeft = 0
    }
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h2 className="title">{title}</h2>
      </div>
      <div className="rowWrapper">
        <button onClick={() => scroll('left')} className="scrollButton">❮</button>
        <div 
          ref={scrollContainer}
          className="movieRow"
          onScroll={handleScroll}
        >
          {displayMovies.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              onDoubleClick={() => onMovieClick(movie)}
              onAddToList={onAddToList}
            />
          ))}
        </div>
        <button onClick={() => scroll('right')} className="scrollButton">❯</button>
      </div>
    </div>
  )
}

export default MovieRow