# Netflix Clone - Interactive React Application

A fully functional Netflix clone built with React and Vite, featuring responsive design, interactive components, and modern UI/UX patterns.

---

## Original Website/App Chosen

**Netflix** (https://www.netflix.com/)

A streaming entertainment service platform providing TV shows, movies, and interactive content with personalized recommendations and user profiles.

---

## Scope of Recreation

This project recreates the core Netflix user interface and functionality:

### Pages Implemented
1. **Home Page** — Main dashboard with featured content and categorical movie rows
2. **Movie Details Modal** — Full movie information with metadata (cast, year, seasons, rating, creator)
3. **Search Results Page** — Dynamic filtered view based on title search
4. **All Movies View** — Complete grid view of all TV shows or movies by category
5. **Profile Selector** — User profile selection screen on app load

### Features Recreated
- Featured hero section with movie banner
- Horizontal scrollable movie rows by category (Drama, Romance, Mystery)
- Search functionality by movie title
- Single-click modal to view movie details
- "My List" personalized watchlist
- "Continue Watching" section with static content
- Toast notifications for user actions
- Responsive design for mobile, tablet, and desktop

---

## Features Implemented

### Core Interactive Features
✅ **Search Functionality**
- Real-time title search across all movies
- Dynamic filtering by title or description
- Displays search results in dedicated view
- Clear search and return to home functionality

✅ **Movie Details Modal**
- Click to open full movie information
- Displays cast, year, seasons, rating, creator
- Trailer link integration
- Add to My List button
- Close modal with X button or outside click

✅ **Add to My List**
- Save favorite movies to personalized watchlist
- Duplicate prevention
- Dynamic "My List" section appears when items added
- Toast notification on action
- Non-infinite scroll for list view

✅ **Navigation & Routing**
- Home page with all sections
- Search results view
- All Movies/TV view with filtering
- Profile selector on app launch
- Smooth transitions between views

✅ **Movie Rows with Infinite Scroll**
- Drama section — 9 TV shows
- Romance section — 10 TV shows and movies
- Mystery section — 9 TV shows
- Continue Watching section — 5 curated items (non-scrolling)
- Left/right arrow buttons for manual scrolling (disabled on Continue Watching)
- Tripled movie sets for seamless infinite scroll effect

✅ **Responsive Design**
- Mobile-first approach
- Optimized layouts for 480px, 768px, 1024px+ breakpoints
- Touch-friendly buttons and interactive elements
- Adaptive hero section and header sizing

✅ **Visual Polish**
- Glass morphism effects on modal buttons
- Hover effects on movie cards (scale 1.05, brightness increase)
- Smooth scroll behavior
- Dark Netflix-inspired theme
- Gradient overlays and visual hierarchy
- Animations for modal entrance

✅ **Toast Notifications**
- User feedback for actions (add to list, duplicates)
- Auto-dismiss after 3 seconds
- Non-intrusive placement

---

## Technical Implementation

### State Management
```javascript
// App.jsx state variables
const [searchTerm, setSearchTerm] = useState('')        // Search input
const [selectedMovie, setSelectedMovie] = useState(null) // Modal visibility
const [myList, setMyList] = useState([])                // User's watchlist
const [currentProfile, setCurrentProfile] = useState(null) // Profile selection
const [showAllMovies, setShowAllMovies] = useState(false) // View type toggle
const [viewType, setViewType] = useState('home')        // 'home', 'movies', 'tv'
const [toast, setToast] = useState(null)                // Notification message

// MovieRow.jsx state
const [displayMovies, setDisplayMovies] = useState([])  // Tripled movies for infinite scroll
```

### Routing Structure
App uses conditional rendering instead of traditional routing:
- Profile selector → Home page → Search results or All Movies view
- Navigation: Home button returns to main view
- Search triggers dedicated results page
- View All buttons show complete category grid

### Component Architecture
```
App.jsx (Main orchestrator)
├── ProfileSelector (Profile selection)
├── Header (Navigation + SearchBar)
│   └── SearchBar (Search component)
├── Hero (Featured movie banner)
├── MovieRow (Horizontal scrollable lists)
│   └── MovieCard (Individual movie tile)
├── AllMoviesView (Grid view for all/filtered movies)
│   └── MovieCard
├── MovieModal (Details view)
└── Toast (Notifications)
```

### React Hooks Used
- `useState` — State management for search, modals, lists, profiles
- `useRef` — DOM references for scroll container in MovieRow
- `useEffect` — Movie duplication for infinite scroll, initialization

### Data Structure
- **33 movies/shows** with complete metadata:
  - id, title, image path, category, type, description
  - trailerUrl, cast, year, seasons, rating, creator
- **Categories**: Drama (9), Romance (10), Mystery (9), Action (2 movies), Plus 3 additional movies
- **Dynamic image mapping** from assets folder and ES6 imports

### Styling Approach
- CSS modules for component-scoped styling
- CSS media queries for responsive design
- Inline styles for dynamic values
- Gradient backgrounds and overlays
- Smooth transitions and animations
- Dark Netflix theme (blacks and grays with red accents)

### Key Features Code Highlights
**Infinite Scroll Logic** (MovieRow.jsx):
```javascript
useEffect(() => {
  if (movies.length > 0) {
    if (infiniteScroll) {
      setDisplayMovies([...movies, ...movies, ...movies]) // Triple for seamless loop
    } else {
      setDisplayMovies(movies)
    }
  }
}, [movies, infiniteScroll])
```

**Search Filtering** (App.jsx):
```javascript
const searchResults = searchTerm.trim() ? allMovies.filter(movie =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  movie.description.toLowerCase().includes(searchTerm.toLowerCase())
) : []
```

**Add to List with Duplicates Prevention** (App.jsx):
```javascript
const handleAddToList = (movie) => {
  if (!myList.find(m => m.id === movie.id)) {
    setMyList([...myList, movie])
    setToast(`${movie.title} added to My List!`)
  } else {
    setToast(`${movie.title} is already in My List!`)
  }
}
```

---

## Deployment (GitHub Pages)

### Live Site URL
🌐 **[Netflix Clone Live](https://jviyata.github.io/netflix-clone1/)**

### Repository URL
📦 **[GitHub Repository](https://github.com/Jviyata/netflix-clone1)**

### Deployment Steps
1. Code is deployed to GitHub Pages via GitHub Actions or manual push
2. `gh-pages` branch contains the built production files
3. Main branch contains the latest source code
4. Site loads correctly at the GitHub Pages URL
5. All routing works properly (uses hash-based navigation)
6. No broken links or missing assets

### Deployment Verification
✅ Site loads correctly
✅ All images display properly
✅ Navigation functions work
✅ Search returns results
✅ Modals open and close
✅ Responsive design works on mobile/tablet
✅ No console errors

---

## Future Improvements

### Phase 2 Features
- [ ] **localStorage Integration** — Persist "My List" across sessions
- [ ] **User Ratings & Reviews** — Allow users to rate and review movies
- [ ] **Watchlist Management** — Edit/remove items from My List
- [ ] **Movie Recommendations** — Suggest movies based on watch history
- [ ] **Advanced Search** — Filter by year, rating, genre, type
- [ ] **Favorites/Bookmarking** — Star system for favorite movies
- [ ] **Browsing History** — Track viewed movies and continue watching points

### Phase 3 Features
- [ ] **Real API Integration** — Connect to OMDB or TMDb API
- [ ] **Carousel Animations** — Enhanced transition effects
- [ ] **Dark/Light Theme Toggle** — User theme preference
- [ ] **Social Sharing** — Share movies to social platforms
- [ ] **Watch Parties** — Real-time viewing with friends
- [ ] **Content Ratings** — Parental controls and age restrictions

### Phase 4 Features
- [ ] **Authentication** — User accounts and login
- [ ] **Multiple Profiles** — Profile management and switching
- [ ] **Admin Dashboard** — Content management system
- [ ] **Analytics** — User engagement tracking
- [ ] **Payment Integration** — Subscription system
- [ ] **PWA Support** — Offline viewing capability

---

## Project Status

**Current Version**: 1.0.0  
**Last Updated**: February 28, 2026  
**Status**: ✅ Complete & Deployed

### Completed Milestones
✅ UI recreation matching Netflix design  
✅ All core features implemented  
✅ Responsive design across devices  
✅ Infinite scroll functionality  
✅ Search and filtering working  
✅ Modal system complete  
✅ Deployed to GitHub Pages  
✅ No major console errors  

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Jviyata/netflix-clone1.git
cd netflix-clone1/netflix-clone1

# Install dependencies
npm install

# Start development server
npm run dev

# Visit in browser
# http://localhost:5174/netflix-clone1/

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Technologies Used

- **React 19.2.0** — UI framework
- **Vite 7.2.4** — Build tool and dev server
- **CSS3** — Styling with media queries and animations
- **JavaScript ES6+** — Modern syntax and features
- **GitHub Pages** — Hosting and deployment

---

## Browser Compatibility

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers  

---

## License

This project is a recreation for educational purposes. Netflix is a trademark of Netflix, Inc.

---

*Built with ❤️ using React and Vite*
