import MovieCard from './MovieCard'

function MovieRow({ title, movies, onMovieClick }) {
  return (
    <div style={styles.row}>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.posters}>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onDoubleClick={() => onMovieClick && onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  row: {
    padding: '20px 50px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '15px',
    fontSize: '20px',
  },
  posters: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '10px',
  }
}

export default MovieRow