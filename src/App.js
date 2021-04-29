import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfLogoPath from '@visual-framework/vf-logo/assets/logo.svg';
import Home from './Home';
import TestPage from './TestPage';
import ComponentShowcase from './components/components-showcase/ComponentShowcase';
// import './vf-components/vf-componenet-rollup/index.scss';

// VF njk templates
// import { VfLogo } from './vf-components/vf-extensions-react/vf-extensions-react.jsx';

function App() {
  return (
    <Router basename={'/vf-react'}>
      <div className="vf-body">
        <header className="vf-global-header">
          <NavLink className="vf-logo" to="/">
            <img className="vf-logo__image" src={VfLogoPath} alt="Visual Framework 2.0" />
            <span className="vf-logo__text">Visual Framework 2.0</span> 
          </NavLink>
          <nav class="vf-navigation vf-navigation--global | vf-cluster">
            <ul class="vf-navigation__list | vf-list | vf-cluster__inner">
              <li className="vf-navigation__item">
                <a href="https://visual-framework.github.io/vf-welcome/" className="vf-navigation__link">About the Visual Framework</a>
              </li>
              <li className="vf-navigation__item">
                <a href="https://github.com/visual-framework/vf-core/tree/develop/tools/vf-extensions-react/#readme" className="vf-navigation__link">Documentation</a>
              </li>
              <li className="vf-navigation__item">
                <Link to="/components-showcase" className="vf-navigation__link">Components Showcase</Link>
              </li>
              <li className="vf-navigation__item">
                <a href="https://discord.gg/XHAvkUX" className="vf-navigation__link">Help, chat</a>
              </li>
            </ul>
          </nav>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/components-showcase" component={ComponentShowcase} />
        <Route path="/testpage" component={TestPage} />
      </div>
    </Router>
  );
}

export default App;
