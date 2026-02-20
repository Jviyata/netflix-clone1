import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import MovieModal from './components/MovieModal'
import './App.css'

// Dynamic image import - creates paths for images
const getImagePath = (id) => `./assets/${id}.jpg`

function App() {
  const allMovies = [
    // Drama (10)
    { id: 1, title: 'Bridgerton (Season 4, Part 2)', image: getImagePath(1), category: 'drama', description: 'The drama continues in the Bridgerton universe as romance and scandal intertwine in high society.' },
    { id: 2, title: 'Finding Her Edge', image: getImagePath(2), category: 'drama', description: 'A young woman discovers her inner strength while navigating the challenges of modern life.' },
    { id: 3, title: 'Gilmore Girls', image: getImagePath(3), category: 'drama', description: 'A mother and daughter navigate life in the quirky town of Stars Hollow with coffee and conversation.' },
    { id: 4, title: 'Gossip Girl', image: getImagePath(4), category: 'drama', description: 'Manhattan\'s elite navigate scandals and secrets in the Upper East Side.' },
    { id: 5, title: 'Ginny & Georgia', image: getImagePath(5), category: 'drama', description: 'A free-spirited mother and her angsty teenage daughter settle into a New England town.' },
    { id: 6, title: 'Outer Banks', image: getImagePath(6), category: 'drama', description: 'A tight-knit group of teens search for hidden treasure while navigating class divisions.' },
    { id: 7, title: 'Queen Charlotte', image: getImagePath(7), category: 'drama', description: 'The rise and love life of a young Queen Charlotte in Regency-era England.' },
    { id: 8, title: 'Sweet Magnolias', image: getImagePath(8), category: 'drama', description: 'Three lifelong friends support each other through the complexities of life, family, and new romance.' },
    { id: 9, title: 'Firefly Lane', image: getImagePath(9), category: 'drama', description: 'Two best friends navigate decades of friendship, from teenage years to adulthood.' },
    { id: 10, title: 'The Crown', image: getImagePath(10), category: 'drama', description: 'The political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.' },
    
    // Romance (10)
    { id: 11, title: 'His & Hers', image: getImagePath(11), category: 'romance', description: 'Two strangers find love in unexpected circumstances in this heartwarming romance.' },
    { id: 12, title: 'People We Meet on Vacation', image: getImagePath(12), category: 'romance', description: 'Best friends take one last vacation together to determine if their friendship could be something more.' },
    { id: 13, title: 'Emily in Paris', image: getImagePath(13), category: 'romance', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.' },
    { id: 14, title: 'Virgin River', image: getImagePath(14), category: 'romance', description: 'A nurse practitioner moves to a remote California town where she finds unexpected romance and healing.' },
    { id: 15, title: 'The Summer I Turned Pretty', image: getImagePath(15), category: 'romance', description: 'A love triangle unfolds during one transformative summer at the beach house.' },
    { id: 16, title: 'XO, Kitty', image: getImagePath(16), category: 'romance', description: 'Kitty travels to Seoul to reunite with her long-distance boyfriend, only to find herself navigating new relationships.' },
    { id: 17, title: 'Sex and the City', image: getImagePath(17), category: 'romance', description: 'Four friends navigate love, friendship, and fashion in New York City.' },
    { id: 18, title: 'Never Have I Ever', image: getImagePath(18), category: 'romance', description: 'A first-generation Indian American teenager navigates high school, family, and complicated feelings.' },
    { id: 19, title: 'To All the Boys I Loved Before', image: getImagePath(19), category: 'romance', description: 'A teen\'s secret love letters are mysteriously mailed to her crushes, turning her life upside down.' },
    { id: 20, title: 'Heartstopper', image: getImagePath(20), category: 'romance', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.' },
    
    // Mystery (10)
    { id: 21, title: 'Wednesday', image: getImagePath(21), category: 'mystery', description: 'Wednesday Addams investigates a killing spree while navigating life at Nevermore Academy.' },
    { id: 22, title: 'Pretty Little Liars', image: getImagePath(22), category: 'mystery', description: 'Four friends are haunted by the mysterious disappearance of their best friend and threatening messages from "A".' },
    { id: 23, title: 'Only Murders in the Building', image: getImagePath(23), category: 'mystery', description: 'Three strangers share an obsession with true crime and suddenly find themselves investigating one in their own building.' },
    { id: 24, title: 'The White Lotus', image: getImagePath(24), category: 'mystery', description: 'Dark comedy follows the exploits of various guests and employees at an exclusive tropical resort.' },
    { id: 25, title: 'Big Little Lies', image: getImagePath(25), category: 'mystery', description: 'The apparently perfect lives of three mothers unravel to the point of murder in Monterey, California.' },
    { id: 26, title: 'Veronica Mars', image: getImagePath(26), category: 'mystery', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.' },
    { id: 27, title: 'Nancy Drew', image: getImagePath(27), category: 'mystery', description: 'The legendary teenage detective investigates supernatural mysteries in her coastal hometown.' },
    { id: 28, title: 'Dead to Me', image: getImagePath(28), category: 'mystery', description: 'A widow dealing with loss befriends a free spirit with a shocking secret.' },
    { id: 29, title: 'The Watcher', image: getImagePath(29), category: 'mystery', description: 'A family moves into their dream home, only to be plagued by ominous letters from someone calling themselves "The Watcher".' },
    { id: 30, title: 'Riverdale', image: getImagePath(30), category: 'mystery', description: 'A subversive take on Archie Comics as the town of Riverdale deals with dark mysteries and scandals.' },
  ]

  const continueWatchingList = [
    { id: 26, title: 'Veronica Mars', image: getImagePath(26), category: 'mystery', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.' },
    { id: 13, title: 'Emily in Paris', image: getImagePath(13), category: 'romance', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.' },
    { id: 15, title: 'The Summer I Turned Pretty', image: getImagePath(15), category: 'romance', description: 'A love triangle unfolds during one transformative summer at the beach house.' },
    { id: 20, title: 'Heartstopper', image: getImagePath(20), category: 'romance', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.' },
    { id: 17, title: 'Sex and the City', image: getImagePath(17), category: 'romance', description: 'Four friends navigate love, friendship, and fashion in New York City.' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [myList, setMyList] = useState([])

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
      
      {/* My List Section */}
      {myList.length > 0 && (
        <MovieRow 
          title="My List" 
          movies={myList}
          onMovieClick={setSelectedMovie}
        />
      )}

      {/* Continue Watching Section */}
      <MovieRow 
        title="Continue Watching" 
        movies={continueWatchingList}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
      />

      {/* Drama Section */}
      <MovieRow 
        title="Drama" 
        movies={allMovies.filter(m => m.category === 'drama')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
      />

      {/* Romance Section */}
      <MovieRow 
        title="Romance" 
        movies={allMovies.filter(m => m.category === 'romance')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
      />

      {/* Mystery Section */}
      <MovieRow 
        title="Mystery" 
        movies={allMovies.filter(m => m.category === 'mystery')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
      />

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
  // Remove unused styles
}

export default App