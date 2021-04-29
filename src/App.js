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
      <div className="vf-body | vf-stack vf-stack--400">
        <header class="vf-global-header">
          <NavLink className="vf-logo" to="/">
            <img className="vf-logo__image" src={VfLogoPath} alt="Visual Framework 2.0" />
          </NavLink>

          <nav class="vf-navigation vf-navigation--global | vf-cluster">
            <ul class="vf-navigation__list | vf-list | vf-cluster__inner">
              
              <li class="vf-navigation__item">
                <a href="/search" class="vf-navigation__link">Search</a>
              </li>
              <li class="vf-navigation__item">
                <a href="https://github.com/visual-framework/vf-core" class="vf-navigation__link">GitHub</a>
              </li>
              <li class="vf-navigation__item">
                <a href="https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ" class="vf-navigation__link">Slack</a>
              </li>
            </ul>
          </nav>
        </header>
        <nav class="vf-navigation vf-navigation--main | vf-cluster">
          <ul class="vf-navigation__list | vf-list | vf-cluster__inner">
            <li class="vf-navigation__item">
              <NavLink exact={true} to="/" className="vf-navigation__link">Home</NavLink>
            </li>
            <li class="vf-navigation__item">
              <NavLink exact={true} to="/testpage" className="vf-navigation__link">Sample page</NavLink>
            </li>
            <li class="vf-navigation__item">
              <NavLink to="/components-showcase" className="vf-navigation__link">Components Showcase</NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/components-showcase" component={ComponentShowcase} />
        <Route path="/testpage" component={TestPage} />
      </div>
    </Router>
  );
}

export default App;
