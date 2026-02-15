import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import MovieModal from './components/MovieModal'
import './App.css'

function App() {
  const allMovies = [
    // Drama (10)
    { id: 1, title: 'Bridgerton (Season 4, Part 2)', image: '/netflix-clone1/assets/1.jpg', category: 'drama', description: 'The drama continues in the Bridgerton universe as romance and scandal intertwine in high society.' },
    { id: 2, title: 'Finding Her Edge', image: '/netflix-clone1/assets/2.jpg', category: 'drama', description: 'A young woman discovers her inner strength while navigating the challenges of modern life.' },
    { id: 3, title: 'Gilmore Girls', image: '/netflix-clone1/assets/3.jpg', category: 'drama', description: 'A mother and daughter navigate life in the quirky town of Stars Hollow with coffee and conversation.' },
    { id: 4, title: 'Gossip Girl', image: '/netflix-clone1/assets/4.jpg', category: 'drama', description: 'Manhattan\'s elite navigate scandals and secrets in the Upper East Side.' },
    { id: 5, title: 'Ginny & Georgia', image: '/netflix-clone1/assets/5.jpg', category: 'drama', description: 'A free-spirited mother and her angsty teenage daughter settle into a New England town.' },
    { id: 6, title: 'Outer Banks', image: '/netflix-clone1/assets/6.jpg', category: 'drama', description: 'A tight-knit group of teens search for hidden treasure while navigating class divisions.' },
    { id: 7, title: 'Queen Charlotte', image: '/netflix-clone1/assets/7.jpg', category: 'drama', description: 'The rise and love life of a young Queen Charlotte in Regency-era England.' },
    { id: 8, title: 'Sweet Magnolias', image: '/netflix-clone1/assets/8.jpg', category: 'drama', description: 'Three lifelong friends support each other through the complexities of life, family, and new romance.' },
    { id: 9, title: 'Firefly Lane', image: '/netflix-clone1/assets/9.jpg', category: 'drama', description: 'Two best friends navigate decades of friendship, from teenage years to adulthood.' },
    { id: 10, title: 'The Crown', image: '/netflix-clone1/assets/10.jpg', category: 'drama', description: 'The political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.' },
    
    // Romance (10)
    { id: 11, title: 'His & Hers', image: '/netflix-clone1/assets/11.jpg', category: 'romance', description: 'Two strangers find love in unexpected circumstances in this heartwarming romance.' },
    { id: 12, title: 'People We Meet on Vacation', image: '/netflix-clone1/assets/12.jpg', category: 'romance', description: 'Best friends take one last vacation together to determine if their friendship could be something more.' },
    { id: 13, title: 'Emily in Paris', image: '/netflix-clone1/assets/13.jpg', category: 'romance', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.' },
    { id: 14, title: 'Virgin River', image: '/netflix-clone1/assets/14.jpg', category: 'romance', description: 'A nurse practitioner moves to a remote California town where she finds unexpected romance and healing.' },
    { id: 15, title: 'The Summer I Turned Pretty', image: '/netflix-clone1/assets/15.jpg', category: 'romance', description: 'A love triangle unfolds during one transformative summer at the beach house.' },
    { id: 16, title: 'XO, Kitty', image: '/netflix-clone1/assets/16.jpg', category: 'romance', description: 'Kitty travels to Seoul to reunite with her long-distance boyfriend, only to find herself navigating new relationships.' },
    { id: 17, title: 'Sex and the City', image: '/netflix-clone1/assets/17.jpg', category: 'romance', description: 'Four friends navigate love, friendship, and fashion in New York City.' },
    { id: 18, title: 'Never Have I Ever', image: '/netflix-clone1/assets/18.jpg', category: 'romance', description: 'A first-generation Indian American teenager navigates high school, family, and complicated feelings.' },
    { id: 19, title: 'To All the Boys I Loved Before', image: '/netflix-clone1/assets/19.jpg', category: 'romance', description: 'A teen\'s secret love letters are mysteriously mailed to her crushes, turning her life upside down.' },
    { id: 20, title: 'Heartstopper', image: '/netflix-clone1/assets/20.jpg', category: 'romance', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.' },
    
    // Mystery (10)
    { id: 21, title: 'Wednesday', image: '/netflix-clone1/assets/21.jpg', category: 'mystery', description: 'Wednesday Addams investigates a killing spree while navigating life at Nevermore Academy.' },
    { id: 22, title: 'Pretty Little Liars', image: '/netflix-clone1/assets/22.jpg', category: 'mystery', description: 'Four friends are haunted by the mysterious disappearance of their best friend and threatening messages from "A".' },
    { id: 23, title: 'Only Murders in the Building', image: '/netflix-clone1/assets/23.jpg', category: 'mystery', description: 'Three strangers share an obsession with true crime and suddenly find themselves investigating one in their own building.' },
    { id: 24, title: 'The White Lotus', image: '/netflix-clone1/assets/24.jpg', category: 'mystery', description: 'Dark comedy follows the exploits of various guests and employees at an exclusive tropical resort.' },
    { id: 25, title: 'Big Little Lies', image: '/netflix-clone1/assets/25.jpg', category: 'mystery', description: 'The apparently perfect lives of three mothers unravel to the point of murder in Monterey, California.' },
    { id: 26, title: 'Veronica Mars', image: '/netflix-clone1/assets/26.jpg', category: 'mystery', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.' },
    { id: 27, title: 'Nancy Drew', image: '/netflix-clone1/assets/27.jpg', category: 'mystery', description: 'The legendary teenage detective investigates supernatural mysteries in her coastal hometown.' },
    { id: 28, title: 'Dead to Me', image: '/netflix-clone1/assets/28.jpg', category: 'mystery', description: 'A widow dealing with loss befriends a free spirit with a shocking secret.' },
    { id: 29, title: 'The Watcher', image: '/netflix-clone1/assets/29.jpg', category: 'mystery', description: 'A family moves into their dream home, only to be plagued by ominous letters from someone calling themselves "The Watcher".' },
    { id: 30, title: 'Riverdale', image: '/netflix-clone1/assets/30.jpg', category: 'mystery', description: 'A subversive take on Archie Comics as the town of Riverdale deals with dark mysteries and scandals.' },
  ]

  const continueWatchingList = [
    { id: 26, title: 'Veronica Mars', image: '/netflix-clone1/assets/26.jpg', category: 'mystery', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.' },
    { id: 13, title: 'Emily in Paris', image: '/netflix-clone1/assets/13.jpg', category: 'romance', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.' },
    { id: 15, title: 'The Summer I Turned Pretty', image: '/netflix-clone1/assets/15.jpg', category: 'romance', description: 'A love triangle unfolds during one transformative summer at the beach house.' },
    { id: 20, title: 'Heartstopper', image: '/netflix-clone1/assets/20.jpg', category: 'romance', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.' },
    { id: 17, title: 'Sex and the City', image: '/netflix-clone1/assets/17.jpg', category: 'romance', description: 'Four friends navigate love, friendship, and fashion in New York City.' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [myList, setMyList] = useState([])

  // Filter movies based on search and category
  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || movie.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToList = (movie) => {
    if (!myList.find(m => m.id === movie.id)) {
      setMyList([...myList, movie])
      alert(`${movie.title} added to My List!`)
    } else {
      alert(`${movie.title} is already in My List!`)
    }
  }

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Hero />
      
      {/* Continue Watching Section */}
      <MovieRow 
        title="Continue Watching" 
        movies={continueWatchingList}
        onMovieClick={setSelectedMovie}
      />

      {/* My List Section */}
      {myList.length > 0 && (
        <MovieRow 
          title="My List" 
          movies={myList}
          onMovieClick={setSelectedMovie}
        />
      )}
      
      {/* Filter Controls */}
      <div style={styles.filterContainer}>
        <h3 style={styles.filterTitle}>Filter by Category:</h3>
        <div style={styles.filterButtons}>
          <button 
            onClick={() => setSelectedCategory('all')}
            style={selectedCategory === 'all' ? styles.activeButton : styles.button}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('drama')}
            style={selectedCategory === 'drama' ? styles.activeButton : styles.button}
          >
            Drama
          </button>
          <button 
            onClick={() => setSelectedCategory('romance')}
            style={selectedCategory === 'romance' ? styles.activeButton : styles.button}
          >
            Romance
          </button>
          <button 
            onClick={() => setSelectedCategory('mystery')}
            style={selectedCategory === 'mystery' ? styles.activeButton : styles.button}
          >
            Mystery
          </button>
        </div>
      </div>

      {/* Results */}
      {filteredMovies.length > 0 ? (
        <MovieRow 
          title="Popular Movies & TV" 
          movies={filteredMovies}
          onMovieClick={setSelectedMovie}
        />
      ) : (
        <div style={styles.noResults}>
          <p>No movies found matching your criteria.</p>
        </div>
      )}

      {/* Movie Modal */}
      <MovieModal 
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onAddToList={handleAddToList}
      />
    </div>
  )
}

const styles = {
  filterContainer: {
    padding: '20px 50px',
    marginTop: '20px',
  },
  filterTitle: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#e5e5e5',
  },
  filterButtons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  activeButton: {
    padding: '10px 20px',
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  noResults: {
    padding: '50px',
    textAlign: 'center',
    fontSize: '18px',
    color: '#999',
  }
}

export default App