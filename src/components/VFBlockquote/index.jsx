import React from "react";
import VfBlockquote from "./vf-blockquote.react";

function VFBlockquote() {
  const checkerboardStyle = {
    overflow: "auto",
    backgroundImage: `
      linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
      linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), 
      linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)
    `,
    backgroundSize: "20px 20px",
    backgroundPositionX: "0px, 10px, 10px, 0px",
    backgroundPositionY: "0px, 0px, -10px, 10px",
  };

  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>
        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Blockquote
            <a
              href="/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              element
            </a>
          </h1>
          <p className="vf-lede">
            <span>
              The <code>vf-blockquote</code> highlights a section that is quoted
              from an external source.
            </span>
          </p>
          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-blockquote"
            >
              <img
                src="https://img.shields.io/badge/github-vf--blockquote-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-blockquote"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-blockquote.svg"
                alt="npm version"
              />
            </a>
          </p>
        </div>
      </section>
      <section className="embl-grid">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="usage">
            {" "}
            Usage
          </h2>
        </div>
        <article>
          <p>
            The <code>vf-blockquote</code> should be used to highlight texts
            from external sources like quotes and testimonials. It should be
            used for more than decorative purposes, ensuring that the text being
            quoted is relevant to the content of the page and adds value to the
            content.
          </p>
          <p>
            It should not be confused with a pull quote which highlights a
            section of text from the same source/page.
          </p>
          <p>
            Quotes should be as concise as possible. The impact of the
            blockquote is diminished when it has long texts as this overwhelms
            the reader.
          </p>
          <p>
            Provide proper attribution such as the name, source and relevant
            information to give credibility to the quote. The component allows
            you to add the image of the person, the name (Which can be linked to
            a profile or source page) and other attribution details.
          </p>
          <p>
            The blockquote is designed to be used on a white background, it is
            advisable to avoid using it on backgrounds with gradients, images or
            other colours. If the background colour is changed, ensure the
            contrast ratio between the texts and the background meet
            accessibility standards.
          </p>
          <h3>When to use</h3>
          <ul>
            <li>
              Quoting external sources such as individuals, experts,
              publications etc.
            </li>
            <li>
              Testimonials and feedback can be highlighted using the{" "}
              <code>vf-blockquote</code>.
            </li>
          </ul>
          <h3>When not to use</h3>
          <ul>
            <li>
              Self-quoting or usage as a pull quote should be avoided in the
              context of the page/content. This component should not be used to
              highlight a portion of text from the same content.
            </li>
            <li>
              <code>Vf-blockquotes</code> should not be used solely for
              decorative purposes, ensuring that the quoted text adds value to
              the content.
            </li>
          </ul>
          <h3>Size</h3>
          <p>
            When using vf-blockquote with headings that have smaller font sizes
            such as 24 px, it is recommended to use the small-vf-blockquote
            variant as the default blockquote variant has a font size of 28px
            and could compete with smaller heading sizes for attention. When
            showing multiple quotes in a section, such as testimonials or
            multiple endorsements the small variant is recommended.
          </p>
          <h3>Accessibility</h3>
          <ul>
            <li>This component targets WCAG 2.1 AA accessibility.</li>
          </ul>
          <h3>React</h3>
          <p>
            As of version 1.2.1 vf-blockquote has experimental React support
            which has been tested on react version 18.2.0
          </p>
          <ol>
            <li>
              <p>
                Install <code>yarn add @visual-framework/vf-blockquote</code>
              </p>
            </li>
            <li>
                Import in the JS file where you want to include this component
              <p>
              </p>
              <pre>
                <code>
                  import VfBlockquote from '@visual-framework/vf-blockquote/vf-blockquote.react';<br/>
                  Make sure you have the jsx support enabled with babel.<br/>
                  Alternatively, you can also copy the vf-blockquote.react.js file from below to your react project and import as per the location.<br/>
                </code>
              </pre>
            </li>
            <li>
              <p>Can be used as</p>
              <pre>
                <code>
                  &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
                  blockquote_author_imageurl=&quot;vf-icon--avatar.svg&quot;
                  blockquote_author_href=&quot;#&quot;
                  blockquote_author_details=&quot;Title and other
                  details&quot;/&gt;
                </code>
              </pre>
            </li>
            <li>
              <p>Styling changes</p>
              <p>
                You should install{" "}
                <a href="https://stable.visual-framework.dev/components/vf-sass-starter">
                  vf-sass-starter
                </a>{" "}
                for the styles and then add below code in your main SCSS file
              </p>
              <pre>
                <code>
                  $vf-font-plex-mono-prefix:
                  '~@visual-framework/vf-font-plex-mono/assets';<br/>
                  $vf-font-plex-sans-prefix:
                  '~@visual-framework/vf-font-plex-sans/assets';<br/> @import
                  '~@visual-framework//vf-sass-starter/index.scss';<br/> @import
                  &quot;~@visual-framework/vf-profile/vf-profile.scss&quot;;<br/>
                  @import &quot;~@visual-framework/vf-text/vf-text.scss&quot;;<br/>
                  @import '~@visual-framework/vf-blockquote/vf-blockquote.scss';
                </code>
              </pre>
            </li>
            <li>
              <p>Usage:</p>
              <pre>
                <code>
                  &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
                  blockquote_author_imageurl=&quot;vf-icon--avatar.svg&quot;
                  blockquote_author_href=&quot;#&quot;
                  blockquote_author_details=&quot;Title and other
                  details&quot;/&gt;
                </code>
              </pre>
            </li>
          </ol>
        </article>
      </section>
      <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">
        Variants
      </h2>
      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-blockquote--default"
        >
          <a href="#vf-blockquote--default">Default variant</a>
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
        <div
          className="vf-u-padding--400"
          style={checkerboardStyle}
        >
          <VfBlockquote
            blockquote_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
            blockquote_author="Marion Burton"
            blockquote_author_details="Title and other details"
            modifier="default"
          />
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
              blockquote_author_details=&quot;Title and other details&quot;
              modifier=&quot;default&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>
      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-blockquote--with-image"
        >
          <a href="#vf-blockquote--with-image">With Image variant</a>
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
        <div
          className="vf-u-padding--400"
          style={checkerboardStyle}
        >
          <VfBlockquote
            blockquote_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
            blockquote_author="Marion Burton"
            blockquote_author_imageurl="https://stable.visual-framework.dev/assets/vf-profile/assets/vf-icon--avatar.svg"
            blockquote_author_details="Title and other details"
            modifier="default"
          />
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
              blockquote_author_imageurl=&quot;vf-icon--avatar.svg&quot;
              blockquote_author_details=&quot;Title and other details&quot;
              modifier=&quot;default&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>
      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-blockquote--default-small"
        >
          <a href="#vf-blockquote--default-small">Default Small variant</a>
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
        <div
          className="vf-u-padding--400"
          style={checkerboardStyle}
        >
          <blockquote
            className="vf-blockquote-small"
          >
            <div className="">
              <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip."
              </div>

              <footer className="vf-u-margin__top--600">
                <div className="vf-blockquote_author">Marion Burton</div>
                <div className="vf-blockquote_author__details">
                  Title and other details
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
              blockquote_author_details=&quot;Title and other details&quot;
              modifier=&quot;small&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>
      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-blockquote--with-image-small"
        >
          <a href="#vf-blockquote--with-image-small">
            With Image Small variant
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
        className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
        style={{ clear: "both" }}
      >
        <div
          className="vf-u-padding--400"
          style={checkerboardStyle}
        >
          <blockquote
            className="vf-blockquote-small"
          >
            <img
              className="vf-profile__image vf-profile--medium vf-u-margin__right--600"
              src="https://stable.visual-framework.dev/assets/vf-profile/assets/vf-icon--avatar.svg"
              alt=""
              loading="lazy"
            />
            <div className="vf-blockquote-has-image">
              <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip."
              </div>

              <footer className="vf-u-margin__top--600">
                <div className="vf-blockquote_author">Marion Burton</div>
                <div className="vf-blockquote_author__details">
                  Title and other details
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBlockquote blockquote_text=&quot;"Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip."&quot; blockquote_author=&quot;Marion Burton&quot;
              blockquote_author_imageurl=&quot;vf-icon--avatar.svg&quot;
              blockquote_author_details=&quot;Title and other details&quot;
              modifier=&quot;small&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>
      <h2 id="examples" className="vf-text vf-text-heading--1 vf-text--invert">
        Examples
      </h2>

      <section className="">
        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-blockquote--linked-name"
            >
              <a href="#vf-blockquote--linked-name">Linked Name</a>
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
            style={checkerboardStyle}
          >
            <blockquote
              className="vf-blockquote"
            >
              <div className="">
                <div>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip."
                </div>

                <footer className="vf-u-margin__top--600">
                  <a href="#" className="vf-blockquote_author__link">
                    <div>Marion Burton</div>
                  </a>
                  <div className="vf-blockquote_author__details">
                    Title and other details
                  </div>
                </footer>
              </div>
            </blockquote>
          </article>
        </section>
        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-blockquote--with-image-and-linked-name"
            >
              <a href="#vf-blockquote--with-image-and-linked-name">
                With Image And Linked Name
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
            style={checkerboardStyle}
          >
            <blockquote
              className="vf-blockquote"
            >
              <img
                className="vf-profile__image vf-u-margin__right--600"
                src="https://stable.visual-framework.dev/assets/vf-profile/assets/vf-icon--avatar.svg"
                alt=""
                loading="lazy"
              />
              <div className="vf-blockquote-has-image">
                <div>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip."
                </div>

                <footer className="vf-u-margin__top--600">
                  <a href="#" className="vf-blockquote_author__link">
                    <div>Marion Burton</div>
                  </a>
                  <div className="vf-blockquote_author__details">
                    Title and other details
                  </div>
                </footer>
              </div>
            </blockquote>
          </article>
        </section>
        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-blockquote--linked-name-small"
            >
              <a href="#vf-blockquote--linked-name-small">Linked Name Small</a>
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
            style={checkerboardStyle}
          >
            <VfBlockquote
              blockquote_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              blockquote_author="Marion Burton"
              blockquote_author_href="#"
              blockquote_author_details="Title and other details"
              modifier="small"
            />
          </article>
        </section>
        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-blockquote--with-image-and-linked-name-small"
            >
              <a href="#vf-blockquote--with-image-and-linked-name-small">
                With Image And Linked Name Small
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
            style={checkerboardStyle}
          >
            <VfBlockquote
              blockquote_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              blockquote_author="Marion Burton"
              blockquote_author_href="#"
              blockquote_author_imageurl="https://stable.visual-framework.dev/assets/vf-profile/assets/vf-icon--avatar.svg"
              blockquote_author_details="Title and other details"
              modifier="small"
            />
          </article>
        </section>
      </section>
    </section>
  );
}

export default VFBlockquote;
