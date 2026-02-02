function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>NETFLIX</h1>
      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>TV Shows</a>
        <a href="#" style={styles.link}>Movies</a>
        <a href="#" style={styles.link}>My List</a>
      </nav>
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
}

export default Header