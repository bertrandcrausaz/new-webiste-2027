export default function BlankPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#f4efe7',
      color: '#0e2a3b',
      fontFamily: 'sans-serif',
      padding: '32px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Blank page</h1>
        <a href="/" style={{ color: '#e24e2c', fontWeight: 700 }}>Back to home</a>
      </div>
    </main>
  );
}
