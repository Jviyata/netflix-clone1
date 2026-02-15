function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.content}>
        <h2 style={styles.title}>Stranger Things</h2>
        <p style={styles.description}>
          When a young boy vanishes, a small town uncovers a mystery involving 
          secret experiments and terrifying supernatural forces.
        </p>
        <div style={styles.buttons}>
          <button style={styles.playBtn}>▶ Play</button>
          <button style={styles.infoBtn}>ℹ More Info</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  hero: {
    height: '500px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #141414), url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px',
    marginBottom: '20px',
  },
  content: {
    maxWidth: '500px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  playBtn: {
    padding: '10px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  infoBtn: {
    padding: '10px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(109, 109, 110, 0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
}

export default Hero