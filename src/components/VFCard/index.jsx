import React from "react";
import VfCard from "./vf-card";

function VFCard() {
  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>

        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Card
            <a
              href="/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              block
            </a>{" "}
          </h1>
          <p className="vf-lede">
            <span>
              Use the
              <code>vf-card</code>
              component to feature categories of content.
            </span>
          </p>

          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-card"
            >
              <img
                src="https://img.shields.io/badge/github-vf--card-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-card"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-card.svg"
                alt="npm version"
              />
            </a>
          </p>
        </div>
      </section>

      <nav className="vf-navigation vf-navigation--on-this-page | vf-u-fullbleed | vf-cluster">
        <ul
          className="vf-navigation__list | vf-list | vf-cluster__inner"
          data-vf-js-navigation-on-this-page-container="true"
        >
          <li className="vf-navigation__item">On this page</li>
          <li className="vf-navigation__item">
            <a
              href="/components/vf-card#usage"
              className="vf-navigation__link"
              aria-selected="true"
            >
              Usage
            </a>
          </li>
          <li className="vf-navigation__item">
            <a href="/components/vf-card#variants" className="vf-navigation__link">
              Variants
            </a>
          </li>
          <li className="vf-navigation__item">
            <a href="/components/vf-card#examples" className="vf-navigation__link">
              Examples
            </a>
          </li>
        </ul>
      </nav>

      <section className="embl-grid">
        <div className="vf-section-header">
          <h2 className="vf-section-header__heading" id="usage">
            {" "}
            Usage
          </h2>
        </div>
        <article>
          <p>
            There are currently two types of card component that can be used for
            your projects. Each card component requires the additional modifier
            class to be added into either your
            <code>.yml</code>
            file or directly into the HTML.
          </p>
          <p>
            The cards are available in two styled varieties:{" "}
            <code>bordered</code>
            and
            <code>striped</code>. To avoid visual confusion it is recommended to
            use one variant in a container.
          </p>
          <p>
            As the
            <code>striped</code>
            variant makes use of the brand colour it is recommended not to use
            this when displayed in a container that has a background colour.
          </p>
          <p>
            A<code>striped</code>
            card must always have a heading (<code>vf-card__heading</code>).
          </p>
          <h3>Should I use a Card or Summary or Hero?</h3>
          <p>
            The
            <code>vf-card</code>
            is one of the most popular ways to feature content, however it is
            not always the best way.
          </p>
          <p>As a general rule:</p>
          <ul>
            <li>
              use
              <code>vf-card</code>
              to feature a range of different categories (to display event
              types)
            </li>
            <li>
              use
              <code>vf-summary</code>
              for a list of the same type of content (a list of upcoming events)
            </li>
            <li>
              use
              <code>vf-hero</code>
              to indicate a singular theme of content for a page
            </li>
          </ul>
          <h3>Layout</h3>
          <p>
            The
            <code>vf-card</code>
            should look like it's around the same size as card from an average
            set of playing cards.
          </p>
          <h3>Content</h3>
          <p>
            The
            <code>vf-card</code>
            can take a variety optional of content:
          </p>
          <table>
            <thead>
              <tr>
                <th>Content type</th>
                <th>
                  <code>.njk</code>/<code>.yml</code>
                  variable
                </th>
                <th>CSS class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>image</td>
                <td>
                  <code>card_image</code>
                </td>
                <td>
                  <code>vf-card__image</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>alt text</td>
                <td>
                  <code>card_image__alt</code>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>aspect ratio</td>
                <td>
                  <code>card_custom_aspect_ratio</code>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>heading</td>
                <td>
                  <code>card_heading</code>
                </td>
                <td>
                  <code>vf-card__heading</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>link</td>
                <td>
                  <code>card_href</code>
                </td>
                <td>
                  <code>vf-card__link</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>subheading</td>
                <td>
                  <code>card_subheading</code>
                </td>
                <td>
                  <code>vf-card__subheading</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>text</td>
                <td>
                  <code>card_text</code>
                </td>
                <td>
                  <code>vf-card__text</code>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h3>CSS Custom Properties</h3>
          <p>
            For browsers that support the CSS{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">
              <code>aspect-ratio</code>
            </a>{" "}
            property we provide the option to stipulate the images aspect ratio
            in a card using a CSS custom property. By default, if no CSS custom
            property is set, the aspect ratio is
            <code>8 / 4</code>. This can be set on the individual cards using
            the nunjucks 'key' in the <code>.yml</code>
            or with the
            <code>render</code>
            api using the variable
            <code>card_custom_aspect_ratio</code>.
          </p>
          <pre>
            <code>--vf-card__image--aspect-ratio: 16 / 9;</code>
          </pre>
        </article>
      </section>

      <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">
        Variants
      </h2>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-card--bordered"
        >
          <a href="/components/vf-card#vf-card--bordered">Bordered variant</a>
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
            linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
            linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), 
            linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)
          `,
              backgroundSize: "20px 20px",
              backgroundPositionX: "0px, 10px, 10px, 0px",
              backgroundPositionY: "0px, 0px, -10px, 10px",
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </div>

          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              import {VfCard} from "@visual-framework/vf-card/vf-card.react.js";
              <br />
              //or <br />
              import {VfCard} from "@visual-framework/vf-card/vf-card.jsx";
              <br />
              &lt;VfCard parameter="value" /&gt;
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
          id="vf-card--striped"
        >
          <a href="/components/vf-card#vf-card--striped">Striped variant</a>
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
            linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
            linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), 
            linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)
          `,
              backgroundSize: "20px 20px",
              backgroundPositionX: "0px, 10px, 10px, 0px",
              backgroundPositionY: "0px, 0px, -10px, 10px",
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Striped Card Heading"
              card_href="JavaScript:Void(0);"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="striped"
              newTheme="primary"
            />
          </div>

          <div></div>
        </section>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              import {VfCard} from "@visual-framework/vf-card/vf-card.react.js";
              <br />
              // or
              <br />
              import {VfCard} from "@visual-framework/vf-card/vf-card.jsx";
              <br />
              &lt;VfCard parameter="value" /&gt;
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

      <h2 id="examples" className="vf-text vf-text-heading--1 vf-text--invert">
        Examples
      </h2>

      <section className="vf-grid vf-grid__col-3">
        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered-headings"
            >
              <a href="/components/vf-card#vf-card--bordered-headings">Bordered Headings</a>
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
            }}
          >
            <VfCard
              card_heading="A Bordered Card Heading as an example"
              card_subheading="With sub–heading"
              variant="bordered"
              newTheme="primary"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered-headings-with-link"
            >
              <a href="/components/vf-card#vf-card--bordered-headings-with-link">
                Bordered Headings With Link
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
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            </h2>
          </div>

          <article
            className="vf-u-padding--400"
            style={{
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
            }}
          >
            <VfCard
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered"
            >
              <a href="/components/vf-card#vf-card--bordered">Bordered</a>
              <svg
                aria-hidden="true"
                className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
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
            </h2>
          </div>

          <article
            className="vf-u-padding--400"
            style={{
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
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered-with-link"
            >
              <a href="/components/vf-card#vf-card--bordered-with-link">Bordered With Link</a>
              <svg
                aria-hidden="true"
                className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
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
            </h2>
          </div>

          <article
            className="vf-u-padding--400"
            style={{
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
            }}
          >
            <VfCard
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered-with-image"
            >
              <a href="/components/vf-card#vf-card--bordered-with-image">Bordered With Image</a>
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
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--bordered-with-image-and-no-heading"
            >
              <a href="/components/vf-card#vf-card--bordered-with-image-and-no-heading">
                Bordered With Image And No Heading
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
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Bordered Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="bordered"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--striped-only-headings"
            >
              <a href="/components/vf-card#vf-card--striped-only-headings">
                Striped Only Headings
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
            }}
          >
            <VfCard
              card_heading="A Striped Card Heading"
              card_subheading="With sub–heading"
              variant="striped"
              newTheme="primary"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--striped-only-linked-headings"
            >
              <a href="/components/vf-card#vf-card--striped-only-linked-headings">
                Striped Only Linked Headings
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
            }}
          >
            <VfCard
              card_heading="A Striped Card Heading"
              card_subheading="With sub–heading"
              variant="striped"
              newTheme="primary"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--striped"
            >
              <a href="/components/vf-card#vf-card--striped">Striped</a>
              <svg
                aria-hidden="true"
                className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
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
            </h2>
          </div>

          <article
            className="vf-u-padding--400"
            style={{
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
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Striped Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="striped"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--striped-with-link"
            >
              <a href="/components/vf-card#vf-card--striped-with-link">Striped With Link</a>
              <svg
                aria-hidden="true"
                className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end"
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
            </h2>
          </div>

          <article
            className="vf-u-padding--400"
            style={{
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
            }}
          >
            <VfCard
              card_heading="A Striped Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="striped"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>

        <section>
          <div className="vf-section-header">
            <h2
              className="vf-section-header__heading vf-section-header__heading--is-link"
              id="vf-card--striped-with-image"
            >
              <a href="/components/vf-card#vf-card--striped-with-image">Striped With Image</a>
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
            }}
          >
            <VfCard
              card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg"
              card_image__alt="Image alt text"
              card_heading="A Striped Card Heading"
              card_subheading="With sub–heading"
              card_text={<>Lorem ipsum dolor sit amet, consectetur <a href="JavaScript:Void(0);" className="vf-card__link">adipisicing elit</a>. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</>}
              variant="striped"
              newTheme="primary"
              card_href="JavaScript:Void(0);"
            />
          </article>
        </section>
      </section>
    </section>
  );
}
export default VFCard;
