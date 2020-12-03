import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfLogo from './vf-generated-assets/assets/vf-logo/assets/logo.svg';
import Home from './Home';
import TestPage from './TestPage';

function App() {
  return (

    <Router>
      <div className="vf-body">
        <header class="vf-global-header">
          <div class="vf-global-header__inner">
            <a href="http://www.embl.de" class="vf-logo">
              <img class="vf-logo__image" src={VfLogo} alt="Visual Framework 2.0" />
              <span class="vf-logo__text">Visual Framework 2.0 {Router.pathname}</span>
            </a>
            <nav class="vf-navigation vf-navigation--global">
              <ul class="vf-navigation__list | vf-list--inline">
                <li class="vf-navigation__item">
                  <a href="https://visual-framework.github.io/vf-welcome/" class="vf-navigation__link">About the Visual Framework</a>
                </li>
                <li class="vf-navigation__item">
                  <a href="https://visual-framework.github.io/vf-welcome/documentation" class="vf-navigation__link">Documentation</a>
                </li>
                <li class="vf-navigation__item">
                  <a href="https://discord.gg/XHAvkUX" class="vf-navigation__link">Help, chat</a>
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
            <ul class="vf-navigation__list | vf-list--inline">
              <li class="vf-navigation__item">
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
