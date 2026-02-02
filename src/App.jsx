import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import './App.css'

function App() {
  const popularMovies = [
    { id: 1, title: 'Bridgerton (Season 4, Part 2)', image: '/assets/temp.png' },
    { id: 2, title: 'His & Hers', image: '/assets/temp.png' },
    { id: 3, title: 'Finding Her Edge', image: '/assets/temp.png' },
    { id: 4, title: 'Stranger Things', image: '/assets/temp.png' },
    { id: 5, title: 'People We Meet on Vacation', image: '/assets/temp.png' },
  ]

  return (
    <div className="app">
      <Header />
      <Hero />
      <MovieRow title="Popular Movies & TV" movies={popularMovies} />
    </div>
  )
}

export default App