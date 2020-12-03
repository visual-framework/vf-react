import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfLogo from './vf-generated-assets/assets/vf-logo/assets/logo.svg';

function TestPage() {
  return (
    <section className="embl-grid embl-grid--has-centered-content">
      <div>
        {/* empty */}
      </div>
      <div>
        <nav className="vf-breadcrumbs" aria-label="Breadcrumb">
          <ul className="vf-breadcrumbs__list | vf-list vf-list--inline">
            <li className="vf-breadcrumbs__item">
              <NavLink className="vf-breadcrumbs__link" to="/">VF React boilerplate</NavLink>
            </li>
            <li className="vf-breadcrumbs__item">
              Test page
            </li>
          </ul>
        </nav>

        <h1 className="intro__text">A simple page to test JS state.</h1>


        <header className="App-header">
          <img src={VfLogo} className="App-logo" alt="logo" />
          <p className="vf-text">
            Edit <code className="vf-code-example">src/Home.js</code> or <br/> <code className="vf-code-example">vf-components/vf-componenet-rollup/index.scss</code> and save to reload.
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

        <ul className="vf-navigation__list | vf-list--inline">
          <li className="vf-navigation__item">
            <NavLink className="vf-button vf-button--primary" to="/" activeClassName="">Back to the homepage</NavLink>
          </li>
        </ul>

      </div>

    </section>
  );
}

export default TestPage;
