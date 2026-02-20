import './MovieModal.css'

function MovieModal({ movie, onClose, onAddToList }) {
  if (!movie) return null

  const handleAddClick = () => {
    onAddToList(movie)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <img src={movie.image} alt={movie.title} className="modal-image" />
          
          <div className="modal-details">
            <h1 className="modal-title">{movie.title}</h1>
            <p className="modal-description">{movie.description}</p>
            
            <div className="modal-buttons">
              <button className="play-button">▶ Play</button>
              <button 
                className="add-button"
                onClick={handleAddClick}
                title="Add to My List"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal