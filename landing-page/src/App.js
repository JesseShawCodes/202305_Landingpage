import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's the Header
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's the Header
        </a>
      </header>
      <main>
        Here's the Body
      </main>
      <footer>
        <div>
          Here's the footer
        </div>
      </footer>
    </div>
  );
}

export default App;
