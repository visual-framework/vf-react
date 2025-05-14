import React from "react";
import VfBadge from "./vf-badge.react";

function VFBadge() {
  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>

        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Badge
            <a
              href="https://stable.visual-framework.dev/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              element
            </a>
          </h1>
          <p className="vf-lede">
            <span>
              The <code>vf-badge</code> component is used to denote if a page,
              section, or link has a production state of <code>alpha</code>,{" "}
              <code>beta</code> or other information.
            </span>
          </p>

          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-badge"
            >
              <img
                src="https://img.shields.io/badge/github-vf--badge-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-badge"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-badge.svg"
                alt="npm version"
              />
            </a>
          </p>
        </div>
      </section>

      <hr className="vf-divider" />

      <section className="embl-grid">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="usage">
            {" "}
            Usage
          </h2>
        </div>
        <article>
          <h3>React</h3>
          <p>
            As of version 3.0.0-alpha.1 vf-badge has experimental React support
            which has been tested on react version 18.2.0
          </p>
          <ol>
            <li>
              install <code>yarn add @visual-framework/vf-badge</code>
            </li>
            <li>
              import in the JS file wheree you want to include this component
              <pre>
                <code>
                  import VfBadge from '@visual-framework/vf-badge/vf-badge.react';<br/>
                  Make sure you have the jsx support enabled with babel.<br/>
                  Alternatively, you can also copy the vf-badge.react.js file from below to your react project and import as per the location.<br/>
                </code>
              </pre>
            </li>
            <li>
              can be used as
              <pre>
                <code>
                  &lt;VfBadge text=&quot;ALPHA&quot; theme=&quot;primary&quot; id=&quot;Badge1&quot;/&gt;<br/>
                </code>
              </pre>
            </li>
            <li>
              add beloow to your CSS file
              <pre>
                <code>
                  @import '~@visual-framework/vf-sass-config/index.scss';<br/>
                  @import '~@visual-framework/vf-badge/vf-badge.css';<br/>
                </code>
              </pre>
              you should also install and import{" "}
              <a href="https://stable.visual-framework.dev/components/vf-sass-starter">
                vf-sass-starter
              </a>{" "}
              for the styles
            </li>
          </ol>
          <p>Usage:</p>
          <pre>
            <code>
              &lt;VfBadge text=&quot;ALPHA&quot; theme=&quot;primary&quot; id=&quot;Badge1&quot;/&gt;<br/>
            </code>
          </pre>
        </article>
      </section>

      <hr className="vf-divider" />

      <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">
        Variants
      </h2>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-badge--primary"
        >
          <a href="/components/vf-badge/#vf-badge--primary">Primary variant</a>
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
              backgroundImage:
                "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
              backgroundSize: "20px 20px",
              backgroundPositionX: "0px, 10px, 10px, 0px",
              backgroundPositionY: "0px, 0px, -10px, 10px",
            }}
          >
            <VfBadge text="ALPHA" theme="primary" id="Badge1" />
          </div>

          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBadge text=&quot;ALPHA&quot; theme=&quot;primary&quot; id=&quot;Badge1&quot;/&gt;<br/>
            </code>
          </pre>
        </details>
      </article>

      <article
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <hr className="vf-divider" />
        <h2
          id="examples"
          className="vf-text vf-text-heading--1 vf-text--invert"
        >
          Examples
        </h2>

        <section className="vf-grid vf-grid__col-3">
          <section>
            <div className="vf-section-header">
              <h2
                className="vf-section-header__heading vf-section-header__heading--is-link"
                id="vf-badge--secondary"
              >
                <a href="/components/vf-badge/#vf-badge--secondary">
                  Secondary
                </a>
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
              className="vf-u-padding--400"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
                backgroundSize: "20px 20px",
                backgroundPositionX: "0px, 10px, 10px, 0px",
                backgroundPositionY: "0px, 0px, -10px, 10px",
              }}
            >
              <VfBadge text="ALPHA" theme="secondary" />
            </article>
          </section>

          <section>
            <div className="vf-section-header">
              <h2
                className="vf-section-header__heading vf-section-header__heading--is-link"
                id="vf-badge--tertiary"
              >
                <a href="/components/vf-badge/#vf-badge--tertiary">Tertiary</a>
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
              className="vf-u-padding--400"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
                backgroundSize: "20px 20px",
                backgroundPositionX: "0px, 10px, 10px, 0px",
                backgroundPositionY: "0px, 0px, -10px, 10px",
              }}
            >
              <VfBadge text="ALPHA" theme="tertiary" id="Badge2" />
            </article>
          </section>

          <section>
            <div className="vf-section-header">
              <h2
                className="vf-section-header__heading vf-section-header__heading--is-link"
                id="vf-badge--link---primary"
              >
                <a href="/components/vf-badge/#vf-badge--link---primary">
                  Link Primary
                </a>
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
              className="vf-u-padding--400"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
                backgroundSize: "20px 20px",
                backgroundPositionX: "0px, 10px, 10px, 0px",
                backgroundPositionY: "0px, 0px, -10px, 10px",
              }}
            >
              <VfBadge
                text="BETA"
                theme="primary"
                id="BadgeHref"
                badge_href="#"
              />
            </article>
          </section>
        </section>
      </article>
    </section>
  );
}
export default VFBadge;
