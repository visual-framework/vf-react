import React from "react";
import { VfButton } from "./vf-button.jsx";

function VFButton() {
  // Define the checkerboard background style as a constant to avoid repetition
  const checkerboardStyle = {
    overflow: 'auto',
    backgroundImage: `
      linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
      linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), 
      linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)
    `,
    backgroundSize: '20px 20px',
    backgroundPositionX: '0px, 10px, 10px, 0px',
    backgroundPositionY: '0px, 0px, -10px, 10px'
  };

  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>

        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Button
            <a
              href="https://stable.visual-framework.dev/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              element
            </a>
          </h1>
          <p className="vf-lede">
            <span>
              Buttons are clickable elements that trigger an action. They can
              communicate calls to action, are visually prominent, and allow
              users to interact with the pages in various ways.
            </span>
          </p>

          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-button"
            >
              <img
                src="https://img.shields.io/badge/github-vf--button-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-button"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-button.svg"
                alt="npm version"
              />
            </a>
          </p>
        </div>
      </section>

      <hr className="vf-divider" />

      <section className="embl-grid">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="usage">Usage</h2>
        </div>
        <article>
          <p>
            The <code>vf-button</code> component can be used with forms on a page
            and as a prominent 'call to action' link that goes to another page.
          </p>
          <h3>When To Use</h3>
          <p>
            A button can be used to submit data or take action and as a link to
            navigate to another page.
          </p>
          <p>
            Use the primary button for the principal call to action on a page or
            form. Avoid having multiple primary buttons on the same page or
            form.
          </p>
          <p>
            Use secondary buttons for secondary calls to action. Pages with too
            many prominent calls to action make it hard for users to know what
            to do next. Before adding lots of secondary buttons, try to simplify
            the page or break the content down across multiple pages.
          </p>
          <p>
            Tertiary buttons can be used for less prominent actions. Consider
            using a link instead of a button to send users to another page, if
            this action is not very important.
          </p>
          <p>
            As the <code>vf-button</code> is relatively large, depending on the
            context, you may wish to use the <code>vf-button--small</code>{" "}
            variant instead.
          </p>

          <h3>React</h3>
          <p>
            As of version 3.0.0-alpha.1 vf-button has React support which has
            been tested on React version 18.2.0
          </p>
          <ol>
            <li>
              install <code>yarn add @visual-framework/vf-button</code>
            </li>
            <li>
              import in your component:
              <pre>
                <code>
                  import {"{ VfButton }"} from
                  '@visual-framework/vf-button/vf-button.react';
                </code>
              </pre>
            </li>
            <li>
              can be used as:
              <pre>
                <code>
                  {'<VfButton text="Primary Button" theme="primary" />'}
                </code>
              </pre>
            </li>
          </ol>
        </article>
      </section>
      <hr className="vf-divider" />
      <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">
        Variants
      </h2>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-button--primary"
        >
          <a href="/components/vf-button#vf-button--primary">Primary variant</a>
          <svg
            aria-hidden="true"
            className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
              fill=""
              fillRule="nonzero"
            ></path>
          </svg>
        </h2>
      </div>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <section className="vf-grid vf-grid__col-3">
          <div></div>
          <div className="vf-u-padding--400" style={checkerboardStyle}>
            <VfButton text="Primary Button" theme="primary" />
          </div>
          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre>
            <code>
              {'import { VfButton } from "@visual-framework/vf-button/vf-button.react.js";<br/>' +
               '// or<br/>' +
               'import { VfButton } from "@visual-framework/vf-button/vf-button.jsx";<br/>' +
               '<VfButton parameter="value" />'
              }
            </code>
          </pre>
          <br />
          <p>
            For individual parameter names and options, see the Nunjucks syntax
            example.{" "}
            <a href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions-react/README.md">
              Also follow the React setup guide
            </a>
            . Note: React support is in its early pre-alpha stage and not all
            component are yet supported.
          </p>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-button--secondary"
        >
          <a href="/components/vf-button#vf-button--secondary">Secondary variant</a>
          <svg
            aria-hidden="true"
            className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
              fill=""
              fillRule="nonzero"
            ></path>
          </svg>
        </h2>
      </div>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <section className="vf-grid vf-grid__col-3">
          <div></div>
          <div className="vf-u-padding--400" style={checkerboardStyle}>
            <VfButton text="Secondary Button" theme="secondary" />
          </div>
          <div></div>
        </section>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre>
            <code>
              {'import { VfButton } from "@visual-framework/vf-button/vf-button.react.js";<br/>' +
               '// or<br/>' +
               'import { VfButton } from "@visual-framework/vf-button/vf-button.jsx";<br/>' +
               '<VfButton parameter="value" />'
              }
            </code>
          </pre>
          <br />
          <p>
            For individual parameter names and options, see the Nunjucks syntax
            example.{" "}
            <a href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions-react/README.md">
              Also follow the React setup guide
            </a>
            . Note: React support is in its early pre-alpha stage and not all
            component are yet supported.
          </p>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-button--tertiary"
        >
          <a href="/components/vf-button#vf-button--tertiary">Tertiary variant</a>
          <svg
            aria-hidden="true"
            className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
              fill=""
              fillRule="nonzero"
            ></path>
          </svg>
        </h2>
      </div>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <section className="vf-grid vf-grid__col-3">
          <div></div>
          <div
            className="vf-u-padding--400"
            style={{
              overflow: "auto",
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(135deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%),
                linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 0, 10px -10px, 0 10px",
            }}
          >
            <VfButton text="Tertiary Button" theme="tertiary" />
          </div>
          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre>
            <code>
              {'import { VfButton } from "@visual-framework/vf-button/vf-button.react.js";<br/>' +
               '// or<br/>' +
               'import { VfButton } from "@visual-framework/vf-button/vf-button.jsx";<br/>' +
               '<VfButton parameter="value" />'
              }
            </code>
          </pre>
          <br />
          <p>
            For individual parameter names and options, see the Nunjucks syntax
            example.{" "}
            <a href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions-react/README.md">
              Also follow the React setup guide
            </a>
            . Note: React support is in its early pre-alpha stage and not all
            component are yet supported.
          </p>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-button--small"
        >
          <a href="/components/vf-button#vf-button--small">Small variant</a>
          <svg
            aria-hidden="true"
            className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
              fill=""
              fillRule="nonzero"
            ></path>
          </svg>
        </h2>
      </div>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <section className="vf-grid vf-grid__col-3">
          <div></div>
          <div
            className="vf-u-padding--400"
            style={{
              overflow: "auto",
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(135deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%),
                linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 0, 10px -10px, 0 10px",
            }}
          >
            <VfButton text="Small Button" theme="primary" size="sm" />
          </div>
          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre>
            <code>
              {'import { VfButton } from "@visual-framework/vf-button/vf-button.react.js";<br/>' +
               '// or<br/>' +
               'import { VfButton } from "@visual-framework/vf-button/vf-button.jsx";<br/>' +
               '<VfButton parameter="value" />'
              }
            </code>
          </pre>
          <br />
          <p>
            For individual parameter names and options, see the Nunjucks syntax
            example.{" "}
            <a href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions-react/README.md">
              Also follow the React setup guide
            </a>
            . Note: React support is in its early pre-alpha stage and not all
            component are yet supported.
          </p>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-button--link"
        >
          <a href="/components/vf-button#vf-button--link">Link variant</a>
          <svg
            aria-hidden="true"
            className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
              fill=""
              fillRule="nonzero"
            ></path>
          </svg>
        </h2>
      </div>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <section className="vf-grid vf-grid__col-3">
          <div></div>
          <div
            className="vf-u-padding--400"
            style={{
              overflow: "auto",
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(135deg, rgba(59, 111, 182, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%),
                linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, 0.1) 75%)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 0, 10px -10px, 0 10px",
            }}
          >
            <VfButton text="Link Button" theme="link" />
          </div>
          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>
          <pre>
            <code>
              {'import { VfButton } from "@visual-framework/vf-button/vf-button.react.js";<br/>' +
               '// or<br/>' +
               'import { VfButton } from "@visual-framework/vf-button/vf-button.jsx";<br/>' +
               '<VfButton parameter="value" />'
              }
            </code>
          </pre>
          <br />
          <p>
            For individual parameter names and options, see the Nunjucks syntax
            example.{" "}
            <a href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions-react/README.md">
              Also follow the React setup guide
            </a>
            . Note: React support is in its early pre-alpha stage and not all
            component are yet supported.
          </p>
        </details>
      </article>
    </section>
  );
}

export default VFButton;
