function Header({ searchTerm, onSearchChange }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>NETFLIX</h1>
      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>TV Shows</a>
        <a href="#" style={styles.link}>Movies</a>
        <a href="#" style={styles.link}>My List</a>
      </nav>
      <div style={styles.searchWrap}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm || ''}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          style={styles.searchInput}
        />
      </div>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#000',
  },
  logo: {
    color: '#e50914',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
  }
  ,
  searchWrap: {
    marginLeft: '20px',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #333',
    background: '#222',
    color: '#fff',
  }
}

export default Header