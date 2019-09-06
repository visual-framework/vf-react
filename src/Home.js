import React from 'react';
import logo from './vf-generated-assets/assets/vf-core/components/vf-logo/assets/logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="vf-text">
          Edit <code clas="vf-code-example">src/App.js</code> and save to reload.
        </p>
        <a
          className="vf-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
