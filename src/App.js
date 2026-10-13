import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: '32px'}}>
          Srikanth Hayagreevacharya Thirumala
        </p>
        <p style={{fontSize: '16px'}}>
          Software Development Engineer
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/srikanth-hayagreeva-charya-thirumala-6489b888"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>
        <a className="App-link"
          href="https://github.com/TSKHayagreevaC"
          target="_blank"
          rel="noopener noreferrer">
            GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
