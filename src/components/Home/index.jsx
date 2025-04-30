import React from "react";

function Home() {
  return (
    <div className="vf-stack">
      <section className="vf-hero vf-hero--800 | vf-u-fullbleed">
        <div className="vf-hero__content | vf-box | vf-stack vf-stack--400">
          <h1 className="vf-hero__heading">
            <a
              className="vf-hero__heading_link"
              href="https://stable.visual-framework.dev/about"
            >
              The Visual Framework
            </a>
          </h1>

          <p className="vf-hero__subheading">
            Good defaults and technical flexibility for life science websites
          </p>

          <p className="vf-hero__text">
            With compatibility with existing CSS and JS, you can bring your
            Bootstrap, React or vanilla code base. The VF will not break your
            existing code.
          </p>
          <a
            className="vf-hero__link"
            href="https://stable.visual-framework.dev/about"
          >
            About the VF
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                fill=""
                fillRule="nonzero"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <section
        className="embl-grid embl-grid--has-centered-content"
        style={{ "--vf-stack-margin": "0" }}
      >
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="search">
            {" "}
            Search
          </h2>
        </div>

        <form
          action="/search/"
          method="GET"
          className="vf-form vf-form--search vf-form--search--responsive | vf-sidebar vf-sidebar--end"
        >
          <div className="vf-sidebar__inner">
            <div className="vf-form__item | vf-search__item">
              <label
                className="vf-form__label vf-u-sr-only | vf-search__label"
                htmlFor="search_query"
              ></label>
              <input
                type="search"
                id="search"
                placeholder="Search components and documentation"
                name="search_query"
                className="vf-search__input | vf-form__input"
                data-vf-search-client-side-input
                data-vf-search-client-side-destination-prefix=""
              />
            </div>
            <button
              type="submit"
              className="vf-search__button | vf-button vf-button--primary"
            >
              <span className="vf-button__text">Search</span>

              <svg
                className="vf-icon vf-icon--search-btn | vf-button__icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 140 140"
                width="140"
                height="140"
              >
                <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                  <path
                    d="M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z"
                    fill="#FFFFFF"
                    stroke="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </form>
        <div></div>
      </section>

      <section className="vf-card-container | vf-u-fullbleed vf-u-background-color--grey--lightest">
        <div className="vf-card-container__inner">
          <div className="vf-section-header">
            <h2 className="vf-section-header__heading" id="sections">
              {" "}
              Popular sections
            </h2>
          </div>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/building/"
                >
                  Building a site{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                How to get the VF code, guidance and get help.
              </p>
            </div>
          </article>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/components/"
                >
                  Components and patterns{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                Individual building block components and pattern-level example
                boilerplates.
              </p>
            </div>
          </article>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/developing/"
                >
                  Contributing{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                Developing and contributing to the Visual Framework Core and its
                components.
              </p>
            </div>
          </article>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/design-tokens/"
                >
                  Design tokens{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                Colour, typography, spacing and other stylistic decisions as
                structured data.
              </p>
            </div>
          </article>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/design-kit/"
                >
                  Figma design resources{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                Use Figma software to design and collaborate on ideas without
                using code.
              </p>
            </div>
          </article>

          <article className="vf-card vf-card--brand vf-card--bordered">
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading">
                <a
                  className="vf-card__link"
                  href="https://stable.visual-framework.dev/guidance/"
                >
                  Guidance and principles{" "}
                  <svg
                    aria-hidden="true"
                    className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </h3>
              <p className="vf-card__text">
                Here you will find guidance on what, why and how.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="embl-grid embl-grid--has-centered-content">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="install">
            {" "}
            Starter packages
          </h2>
          <p className="vf-section-header__text">
            Use an npm starter package for new projects or to graft existing
            code.
          </p>
        </div>
        <div className="vf-content">
          <p>
            Build components into CSS and JS with{" "}
            <a href="https://github.com/visual-framework/vf-build-boilerplate">
              vf-build-boilerplate
            </a>
            :
          </p>
          <pre className="vf-code-example vf-code-example__pre">
            yarn create{" "}
            <a href="https://github.com/visual-framework/create-vf-project">
              @visual-framework/vf-project
            </a>{" "}
            your-new-site-name{" "}
            <a href="https://github.com/visual-framework/vf-build-boilerplate">
              vf-build-boilerplate
            </a>
          </pre>
          <br />
          <p>
            A full static site generator based off 11ty with{" "}
            <a href="https://github.com/visual-framework/vf-eleventy">
              vf-eleventy
            </a>
            :
          </p>
          <pre className="vf-code-example vf-code-example__pre">
            yarn create{" "}
            <a href="https://github.com/visual-framework/create-vf-project">
              @visual-framework/vf-project
            </a>{" "}
            your-new-site-name{" "}
            <a href="https://github.com/visual-framework/vf-eleventy">
              vf-eleventy
            </a>
          </pre>
          <br />
          <p>
            <a href="https://stable.visual-framework.dev/building">
              More about the above and further options
            </a>{" "}
            and{" "}
            <a href="https://stable.visual-framework.dev/developing/getting-started/setting-up">
              follow a guide to setting up your development environment
            </a>
            .
          </p>
        </div>
      </section>

      <section className="embl-grid embl-grid--has-centered-content">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="pick">
            {" "}
            Pick and choose
          </h2>
          <p className="vf-section-header__text">
            Install the source Sass and JavaScript files via yarn to an existing
            project
          </p>
        </div>
        <div className="vf-content">
          <pre className="vf-code-example__pre">
            <code className="Code Code--lang-bash vf-code-example">
              <span className="hljs-comment">
                # 1. Add the Sass config, starter and any components
              </span>
              yarn add @visual-framework/vf-sass-config
              @visual-framework/vf-sass-starter @visual-framework/vf-content
              @visual-framework/vf-analytics-google
              <span className="hljs-comment"># 2. Import it in your Sass</span>
              @import{" "}
              <span className="hljs-string">
                &#x27;node_modules/@visual-framework/vf-sass-starter/index.scss&#x27;
              </span>
              ; @import{" "}
              <span className="hljs-string">
                &#x27;node_modules/@visual-framework/vf-content/vf-content.scss&#x27;
              </span>
              ;<span className="hljs-comment"># 3. Import JS modules</span>
            </code>
          </pre>
          <br />
          <p>
            <a href="https://stable.visual-framework.dev/components">
              Browse all available components
            </a>
          </p>
        </div>
      </section>

      <section className="embl-grid embl-grid--has-centered-content">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="cdn">
            {" "}
            Prebuilt CDN
          </h2>
          <p className="vf-section-header__text">
            Get a kitchen sink of pre-compiled CSS and JS from the CDN.
          </p>
        </div>
        <div className="vf-content">
          <pre className="vf-code-example__pre">
            <code className="Code Code--lang-html vf-code-example">
              <span className="hljs-comment">&lt;!-- CSS only --&gt;</span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">link</span>{" "}
                <span className="hljs-attr">rel</span>=
                <span className="hljs-string">"stylesheet"</span>{" "}
                <span className="hljs-attr">href</span>=
                <span className="hljs-string">
                  "https://dev.assets.emblstatic.net/vf/develop/css/styles.css"
                </span>
                &gt;
              </span>
              <span className="hljs-comment">&lt;!-- JS --&gt;</span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">script</span>{" "}
                <span className="hljs-attr">src</span>=
                <span className="hljs-string">
                  "https://dev.assets.emblstatic.net/vf/develop/scripts/scripts.js"
                </span>
                &gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">script</span>&gt;
              </span>
            </code>
          </pre>
          <br />
          <p>
            <a href="https://stable.visual-framework.dev/patterns">
              See examples in our HTML boilerplates
            </a>{" "}
            for quick starts and layouts.
          </p>
        </div>
      </section>

      <hr className="vf-divider" />

      <section className="embl-grid embl-grid--has-centered-content">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="current">
            {" "}
            What's current?
          </h2>
          <p className="vf-section-header__text"></p>
        </div>
        <div className="vf-content">
          <ul>
            <li>
              Latest stable release is{" "}
              <a href="updates">
                <code>v2.5.21</code>
              </a>
            </li>
            <li>
              <a href="https://latest.visual-framework.dev/">
                View the latest in-development version
              </a>
            </li>
            <li>
              <a href="https://stable.visual-framework.dev/updates">
                All releases and blog
              </a>
            </li>
          </ul>
        </div>
      </section>

      <p className="vf-text vf-text-body--3">
        Find an issue on this page?
        <a
          className="vf-link"
          href="https://github.com/visual-framework/vf-core/blob/develop/tools/vf-component-library/src/site/index.njk"
        >
          Propose a change
        </a>{" "}
        or{" "}
        <a
          href="https://stable.visual-framework.dev/guidance/discussing-the-vf"
          className="vf-link"
        >
          discuss it
        </a>
        .
      </p>
    </div>
  );
}

export default Home;
