import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* GitHub logo */}
        <img 
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
          className="App-logo" 
          alt="GitHub Logo" 
          style={{ width: "150px", height: "150px" }}
        />

        {/* Your Name */}
        <h1 style={{ marginTop: "20px" }}>Satya Sri</h1>

        {/* GitHub-related link */}
        <p>
          This project is about <strong>GitHub</strong>.
        </p>
        <a
          className="App-link"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
