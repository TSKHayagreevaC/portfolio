import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: '32px'}}>
          Srikanth Hayagreevacharya Thirumala
        </p>
        <p style={{fontSize: '16px'}}>
          Software Development Engineer
        </p>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: '8px'}}>
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
      </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
