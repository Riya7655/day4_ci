import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>🚀 React CI Demo</h2>
        <span className="status">● CI Ready</span>
      </header>

      <main className="hero">
        <div className="card">
          <div className="icon">⚙️</div>

          <h1>React-CI/CD Demo</h1>

          <p>
            This is a simple React frontend created for practicing
            Continuous Integration and Docker deployment.
          </p>

          <div className="info">
            <div>
              <strong>Frontend</strong>
              <span>React</span>
            </div>

            <div>
              <strong>Build</strong>
              <span>npm run build</span>
            </div>

            <div>
              <strong>Container</strong>
              <span>Docker</span>
            </div>
          </div>

          <button onClick={() => alert("CI pipeline is working! 🚀")}>
            Test Application
          </button>
        </div>
      </main>

      <footer>
        <p>React CI Demo • DevOps Practice Project</p>
      </footer>
    </div>
  );
}

export default App;