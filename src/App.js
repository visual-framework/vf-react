import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfLogo from './vf-generated-assets/assets/vf-logo/assets/logo.svg';
import Home from './Home';
import TestPage from './TestPage';

function App() {
  return (

    <Router>
      <div className="vf-body">
        <header className="vf-global-header">
          <div className="vf-global-header__inner">
            <a href="http://www.embl.de" className="vf-logo">
              <img className="vf-logo__image" src={VfLogo} alt="Visual Framework 2.0" />
              <span className="vf-logo__text">Visual Framework 2.0 {Router.pathname}</span>
            </a>
            <nav className="vf-navigation vf-navigation--global">
              <ul className="vf-navigation__list | vf-list--inline">
                <li className="vf-navigation__item">
                  <a href="https://visual-framework.github.io/vf-welcome/" className="vf-navigation__link">About the Visual Framework</a>
                </li>
                <li className="vf-navigation__item">
                  <a href="https://visual-framework.github.io/vf-welcome/documentation" className="vf-navigation__link">Documentation</a>
                </li>
                <li className="vf-navigation__item">
                  <a href="https://discord.gg/XHAvkUX" className="vf-navigation__link">Help, chat</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/testpage" component={TestPage} />

        <section className="embl-grid embl-grid--has-centered-content">
          <div>
          {/* empty */}
          </div>
          <div>
            <ul className="vf-navigation__list | vf-list--inline">
              <li className="vf-navigation__item">
                <NavLink className="vf-button vf-button--primary" to="/testpage" activeClassName="vf-local-overrides--hidden">Go to the Test page</NavLink>
              </li>
            </ul>
          </div>
        </section>


      </div>
    </Router>
  );
}

export default App;
