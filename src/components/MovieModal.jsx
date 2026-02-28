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
        
        <div className="modal-banner">
          <img src={movie.image} alt={movie.title} className="modal-banner-image" />
          <div className="modal-banner-overlay"></div>
        </div>

        <div className="modal-body">
          {/* Title - Largest, high contrast */}
          <h1 className="modal-title">{movie.title}</h1>
          
          {/* Metadata row - Compact and scannable */}
          <div className="modal-metadata">
            <span className="metadata-item">2024</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">{movie.category.charAt(0).toUpperCase() + movie.category.slice(1)}</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">HD</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">PG-13</span>
          </div>

          {/* Content rating + warning - Secondary */}
          <div className="modal-rating">
            <span className="rating-badge">PG-13</span>
            <span className="rating-text">Some content may not be suitable for children</span>
          </div>
          
          {/* Description */}
          <p className="modal-description">{movie.description}</p>
          
          {/* Primary CTA - Large, visually dominant */}
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

          {/* Secondary actions */}
          <div className="modal-secondary-actions">
            <button className="secondary-action">More Episodes</button>
            <button className="secondary-action">More Like This</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal