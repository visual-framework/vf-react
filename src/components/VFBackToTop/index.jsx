import React from 'react';
import VfBackToTop from "./vf-back-to-top.jsx";

function VFBackToTop() {
  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div>
        </div>
        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">Back to top
            <a href="https://stable.visual-framework.dev/guidance/component-types/" className="vf-badge vf-badge--primary vf-badge--phases">block</a>
          </h1>
          <p className="vf-lede">
            <span>An anchor or JavaScript button to scroll the  user to top of the current page, or to a target element.</span>
          </p>
          <p className="vf-intro__text">
            <a className="vf-link" href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-back-to-top"><img src="https://img.shields.io/badge/github-vf--back--to--top-blue" alt="github location"/></a>
            <a className="vf-link" href="https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top"><img src="https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top.svg" alt="npm version"/></a>
          </p>
        </div>
      </section>
      <hr className="vf-divider"/>
      <section className="embl-grid">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="usage"> Usage</h2>
        </div>
        <article>
          <p>Only use on component per page, multiple &quot;back to top&quot; links are <a href="https://www.nngroup.com/articles/back-to-top">not recommended</a>.</p>
          <h3>Inline variant</h3>
          <p>The inline variant can be used without JavaScript and placed at the bottom of content or the page.</p>
          <h3>Floating variant</h3>
          <p>The floating variant is recommended for this component, which appears floating at the bottom right of page. It will appear once the user has scrolled down to 100% of the page height. This requires JavaScript to function.</p>
          <h3>React</h3>
          <p>vf-back-to-top now has React support which has been tested on react version 18.2.0</p>
          <ol>
            <li>install <code>yarn add @visual-framework/vf-back-to-top</code></li>
            <li>
              import in the JS file where you want to include this component
              <pre><code>import VfBackToTop from '@visual-framework/vf-back-to-top/vf-back-to-top.react';</code></pre>
            </li>
            <li>
              can be used as
              <pre><code>&lt;VfBackToTop type=&quot;floating&quot; /&gt;</code></pre>
            </li>
            <li>
              add below to your CSS file
              <pre><code>@import '~@visual-framework/vf-sass-config/index.scss';</code></pre>
              you should also install and import <a href="https://stable.visual-framework.dev/components/vf-sass-starter">vf-sass-starter</a> for the styles
            </li>
          </ol>
          <p>Usage:</p>
          <pre><code>&lt;VfBackToTop type=&quot;floating&quot; /&gt;</code></pre>
        </article>
      </section>
      <hr className="vf-divider"/>
      <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">Variants</h2>
      <div className="vf-section-header">
        <h2 className="vf-section-header__heading vf-section-header__heading--is-link" id="vf-back-to-top--inline">
          <a href="#vf-back-to-top--inline">Inline variant</a>
          <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0C5.376 0.008 0.008 5.376 0 12ZM13.707 6.791L18.207 11.291C18.598 11.682 18.598 12.319 18.207 12.71L13.707 17.21C13.316 17.601 12.679 17.601 12.288 17.21L12.288 17.21C11.897 16.819 11.897 16.182 12.288 15.791L14.654 13.424C14.792 13.286 14.712 13 14.477 13H6C5.448 13 5 12.552 5 12V12C5 11.448 5.448 11 6 11H14.482C14.717 11 14.797 10.714 14.659 10.576L12.293 8.208C11.902 7.817 11.902 7.18 12.293 6.789V6.789C12.684 6.398 13.321 6.398 13.712 6.789L13.707 6.791Z" fill="currentColor"/>
          </svg>
        </h2>
      </div>
      <article className="vf-stack vf-stack--lg vf-u-margin__bottom--1200" style={{ clear: 'both' }}>
        <div className="vf-u-padding--400" style={{
          overflow: 'auto',
          backgroundImage: 'linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPositionX: '0px, 10px, 10px, 0px',
          backgroundPositionY: '0px, 0px, -10px, 10px'
        }}>
          <VfBackToTop type="inline" text="Top" scrollToId="top" example="true" />
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre><code>
          import { VfBackToTop } from "@visual-framework/vf-back-to-top/vf-back-to-top.react.js";<br/>
          // or<br/>
          import { VfBackToTop } from "@visual-framework/vf-back-to-top/vf-back-to-top.jsx";<br/>
          &lt;VfBackToTop type=&quot;inline&quot; text=&quot;Top&quot; scrollToId=&quot;top&quot; example=&quot;true&quot; /&gt;<br/>
          </code></pre>
        </details>
      </article>
      <div className="vf-section-header">
        <h2 className="vf-section-header__heading vf-section-header__heading--is-link" id="vf-back-to-top--floating">
          <a href="#vf-back-to-top--floating">Floating variant</a>
          <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0C5.376 0.008 0.008 5.376 0 12ZM13.707 6.791L18.207 11.291C18.598 11.682 18.598 12.319 18.207 12.71L13.707 17.21C13.316 17.601 12.679 17.601 12.288 17.21L12.288 17.21C11.897 16.819 11.897 16.182 12.288 15.791L14.654 13.424C14.792 13.286 14.712 13 14.477 13H6C5.448 13 5 12.552 5 12V12C5 11.448 5.448 11 6 11H14.482C14.717 11 14.797 10.714 14.659 10.576L12.293 8.208C11.902 7.817 11.902 7.18 12.293 6.789V6.789C12.684 6.398 13.321 6.398 13.712 6.789L13.707 6.791Z" fill="currentColor"/>
          </svg>
        </h2>
      </div>
      <article className="vf-stack vf-stack--lg vf-u-margin__bottom--1200" style={{ clear: 'both' }}>
        <div className="vf-u-padding--400" style={{
          overflow: 'auto',
          backgroundImage: 'linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPositionX: '0px, 10px, 10px, 0px',
          backgroundPositionY: '0px, 0px, -10px, 10px'
        }}>
          <VfBackToTop type="floating" />
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre><code>
          import { VfBackToTop } from "@visual-framework/vf-back-to-top/vf-back-to-top.react.js";<br/>
          // or<br/>
          import { VfBackToTop } from "@visual-framework/vf-back-to-top/vf-back-to-top.jsx";<br/>
          &lt;VfBackToTop type=&quot;floating&quot; /&gt;<br/>
          </code></pre>
        </details>
      </article>
    </section>
  );
}

export default VFBackToTop;
