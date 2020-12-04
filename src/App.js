import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfLogoPath from '@visual-framework/vf-logo/assets/logo.svg';
import Home from './Home';
import TestPage from './TestPage';

function App() {
  return (
    <Router basename={'/vf-react'}>
      <div className="vf-body">
        <header className="vf-global-header">
          <div className="vf-global-header__inner">
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
      </div>
    </Router>
  );
}

export default App;
