import React from "react";
import VfBanner from "./vf-banner.react";

function VFBanner() {
  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>
        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Banner
            <a
              href="https://stable.visual-framework.dev/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              container
            </a>
          </h1>
          <p className="vf-lede">
            <span>
              Informs visitors about important changes or persistent conditions.
              Use this component if you need to communicate to visitors in a
              prominent way. Banners are placed at the top of the page or
              section they apply to, and below the page or section header.
            </span>
          </p>

          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-banner"
            >
              <img
                src="https://img.shields.io/badge/github-vf--banner-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-banner"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-banner.svg"
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
            Usage
          </h2>
        </div>
        <article>
          <ul>
            <li>
              General notice <code>vf-banner vf-banner--notice</code>
            </li>
            <li>
              In development services <code>vf-banner vf-banner--phase</code>
            </li>
            <li>
              Info <code>vf-banner vf-banner--alert vf-banner--info</code>
              <small>
                This replaces <code>vf-banner--phase</code>
              </small>
            </li>
            <li>
              Success <code>vf-banner vf-banner--alert vf-banner--success</code>
            </li>
            <li>
              Alert <code>vf-banner vf-banner--alert vf-banner--alert</code>
            </li>
            <li>
              Warning <code>vf-banner vf-banner--alert vf-banner--warning</code>
            </li>
          </ul>
          <p>
            <strong>note:</strong> The <code>vf-banner--alert</code> variants
            include the option to dismiss the banner. This is currently a 'bring
            your own JavaScript' button. To include a close button in the markup
            you need to make sure you have the variable{" "}
            <code>banner__dismissable</code> set to <code>true</code>:
          </p>
          <pre>
            <code>banner__dismissable: true</code>
          </pre>
          <h3>
            JS Documentation for <code>--modal</code> variant
          </h3>
          <p>
            Like all JS-enabled components in the Visual Framework, if you wish
            to use the bundled JS, you need to include JS data attributes, here
            is an overview of what the options are for the{" "}
            <code>vf-banner--modal</code> variant.
          </p>
          <ul>
            <li>
              Enable VF JS:
              <ul>
                <li>data-vf-js-banner</li>
              </ul>
            </li>
            <li>
              Banner type:
              <ul>
                <li>
                  <code>dismissible</code>: standard messaging type
                </li>
                <li>
                  <code>blocking</code>: full screen
                </li>
                <li>
                  <code>persistent</code>: no close button
                </li>
                <li>data-vf-js-banner-state=&quot;name_of_type&quot;</li>
              </ul>
            </li>
            <li>
              ESC to close:
              <ul>
                <li>
                  Only works with <code>blocking</code> banner state
                </li>
                <li>
                  data-vf-js-banner-esc-close=<code>&quot;y&quot;</code>
                </li>
              </ul>
            </li>
            <li>
              Button text:
              <ul>
                <li>Optional, leaving off will not inject a close button</li>
                <li>
                  data-vf-js-banner-button-text=&quot;Accept and close&quot;
                </li>
              </ul>
            </li>
            <li>
              Button theme:
              <ul>
                <li>
                  Optional, leaving off will default to the secondary theme.
                </li>
                <li>primary, secondary, tertiary themes are available</li>
                <li>data-vf-js-banner-button-theme=&quot;primary&quot;</li>
              </ul>
            </li>
            <li>
              Cookies:
              <ul>
                <li>
                  Both are optional, leaving either off will deactivate cookie
                  storage
                </li>
                <li>
                  data-vf-js-banner-cookie-name=
                  <code>&quot;myServiceName&quot;</code>
                </li>
                <li>
                  data-vf-js-banner-cookie-version=<code>&quot;0.1&quot;</code>{" "}
                  Incrementing this string will invalidate old cookies.
                </li>
              </ul>
            </li>
            <li>
              Extra buttons:
              <ul>
                <li>
                  data-vf-js-banner-extra-button=
                  <code>
                    &quot;&lt;a href='#'&gt;Optional button&lt;/a&gt;&lt;a
                    target='_blank' href='#'&gt;New tab
                    button&lt;/a&gt;&quot;&gt;
                  </code>{" "}
                  This HTML string will be converted into VF markup for extra
                  buttons. Optional.
                </li>
              </ul>
            </li>
            <li>
              Message:
              <ul>
                <li>
                  data-vf-js-banner-modal-text: the <code>.innerHTML</code> of
                  this element will be used as the markup for the message itself
                </li>
              </ul>
            </li>
          </ul>
          <h3>React</h3>
          <p>
            As of version 2.0.0-alpha.2 vf-banner has experimental React support
            which has been tested on react version 18.2.0
          </p>
          <ol>
            <li>
              <p>
                Install <code>yarn add @visual-framework/vf-banner</code>
              </p>
            </li>
            <li>
              <p>
                Import in the JS file where you want to include this component
              </p>
              <pre>
                <code>
                  import VfBanner from '@visual-framework/vf-banner/vf-banner.react';<br/>
                  Make sure you have the jsx support enabled with babel.<br/>
                  Alternatively, you can also copy the vf-banner.react.js file from below to your react project and import as per the location.<br/>
                </code>
              </pre>
            </li>
            <li>
              <p>Can be used as</p>
              <pre>
                <code>
                  &lt;VfBanner<br/>
                  banner__variant="banner__info"<br/>
                  banner__dismissible="true"<br/>
                  banner__message="Here is some very, &lt;em&gt;very&lt;/em&gt; &lt;a className='vf-banner__link' href='#' onClick='return false;'&gt;important information&lt;/a&gt;"<br/>
                  /&gt;<br/>
                </code>
              </pre>
              <p>Possible combinations</p>
              <table>
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Options</th>
                    <th>Default</th>
                    <th>Release</th>
                    <th>Applicable to banner types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>banner__message</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>'basic'</td>
                  </tr>
                  <tr>
                    <td>banner__type</td>
                    <td></td>
                    <td>'basic'</td>
                    <td>current</td>
                    <td>all types</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'inline'</td>
                    <td></td>
                    <td>current</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'fixed'</td>
                    <td></td>
                    <td>current</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'top'</td>
                    <td></td>
                    <td>current</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>banner__variant</td>
                    <td>'banner__info'</td>
                    <td></td>
                    <td></td>
                    <td>'basic'</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'banner__warning'</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'banner__danger'</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>'banner__success'</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>banner__dismissible</td>
                    <td>true, false</td>
                    <td>false</td>
                    <td></td>
                    <td>'basic'</td>
                  </tr>
                  <tr>
                    <td>banner__inline_href</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>'inline', 'top'</td>
                  </tr>
                  <tr>
                    <td>banner__text</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>'fixed'</td>
                  </tr>
                  <tr>
                    <td>data_service_id</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>'fixed'</td>
                  </tr>
                  <tr>
                    <td>data_protection_version</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>'fixed'</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <p>CSS to be added to your styles.scss</p>
              <p>
                You should install{" "}
                <a href="https://stable.visual-framework.dev/components/vf-sass-starter">
                  vf-sass-starter
                </a>{" "}
                for the styles and then add below code in your main SCSS file
              </p>
              <pre>
                <code>
                  $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';<br/>
                  $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';<br/>
                  @import '~@visual-framework/vf-box/vf-box.scss';<br/>
                  @import '~@visual-framework/vf-stack/vf-stack.scss';<br/>
                  @import '~@visual-framework/vf-u-fullbleed/vf-u-fullbleed.scss';<br/>
                </code>
              </pre>
              <p>
                as per your banner of choice add all or some to your styles.scss
              </p>
              <pre>
                <code>
                  @import '~@visual-framework/vf-banner/vf-banner.scss';<br/>
                  @import '~@visual-framework/vf-banner/vf-banner--phase.scss';<br/>
                  @import '~@visual-framework/vf-banner/vf-banner--alerts.scss';<br/>
                  @import '~@visual-framework/vf-banner/vf-banner--gdpr.scss';<br/>
                </code>
              </pre>
              <p>
                for the 'fixed' and 'top' banner type additionally add below to
                styles.scss
              </p>
              <pre>
                <code>
                  @import '~@visual-framework/vf-banner/vf-banner--fixed.scss';<br/>
                  @import "~@visual-framework/vf-badge/vf-badge.scss";<br/>
                  @import '~@visual-framework/vf-button/vf-button.scss';<br/>
                  @import '~@visual-framework/vf-grid/vf-grid.scss';<br/>
                </code>
              </pre>
              <p>Usage:</p>
              <pre>
                <code>
                  &lt;VfBanner banner__variant=&quot;banner__info&quot;
                  banner__dismissible=&quot;true&quot;
                  banner__message=&quot;Here is some very,
                  &lt;em&gt;very&lt;/em&gt; &lt;a className='vf-banner__link'
                  href='#' onclick='return false;'&gt;important
                  information&lt;/a&gt;&quot;/&gt;
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
          id="vf-banner--info"
        >
          <a href="#vf-banner--info">Info variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__variant="banner__info"
            banner__dismissible={true}
            banner__message="Here is some very, <em>very</em> <a className='vf-banner__link' href='#' onClick='return false;'>important information</a>"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBanner<br/>
              banner__variant="banner__info"<br/>
              banner__dismissible="true"<br/>
              banner__message="Here is some very, &lt;em&gt;very&lt;/em&gt; &lt;a className='vf-banner__link' href='#' onClick='return false;'&gt;important information&lt;/a&gt;"<br/>
              /&gt;<br/>
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-banner--warning"
        >
          <a href="#vf-banner--warning">Warning variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__variant="banner__warning"
            banner__dismissible={true}
            banner__message="Easy now, easy does it. <a className='vf-banner__link' href='JavaScript:Void(0);'>link example</a>"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBanner banner__variant=&quot;banner__warning&quot;
              banner__dismissible=&quot;true&quot; banner__message=&quot;Easy
              now, easy does it. &lt;a className=&#39;vf-banner__link&#39;
              href=&#39;JavaScript:Void(0);&#39;&gt;link
              example&lt;/a&gt;&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-banner--danger"
        >
          <a href="#vf-banner--danger">Danger variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__variant="banner__danger"
            banner__message="Oh dear, what have you done? <a className='vf-banner__link' href='JavaScript:Void(0);'>link example</a>"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBanner banner__variant=&quot;banner__danger&quot;
              banner__message=&quot;Oh dear, what have you done? &lt;a
              className=&#39;vf-banner__link&#39;
              href=&#39;JavaScript:Void(0);&#39;&gt;link
              example&lt;/a&gt;&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-banner--success"
        >
          <a href="#vf-banner--success">Success variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__variant="banner__success"
            banner__dismissible={false}
            banner__message="Congratulations! You have made something <a className='vf-banner__link' href='JavaScript:Void(0);'>awesome</a>!"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfBanner banner__variant=&quot;banner__success&quot;
              banner__dismissible=&quot;false&quot;
              banner__message=&quot;Congratulations! You have made something
              &lt;a className=&#39;vf-banner__link&#39;
              href=&#39;JavaScript:Void(0);&#39;&gt;awesome&lt;/a&gt;!&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-banner--fixed"
        >
          <a href="#vf-banner--fixed">Fixed variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__type="fixed"
            banner__text="I agree, dismiss this banner"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              For &#39;top&#39; variant - &lt;VfBanner
              banner__type=&quot;top&quot;
              banner__inline_href=&quot;JavaScript:Void(0);&quot;/&gt; For
              &#39;fixed&#39; variant - &lt;VfBanner
              banner__type=&quot;fixed&quot; banner__text=&quot;I agree, dismiss
              this banner&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-banner--top"
        >
          <a href="#vf-banner--top">Top variant</a>
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
        style={{ clear: "both" /* insurance against strange components */ }}
      >
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
          <VfBanner
            banner__type="top"
            banner__inline_href="JavaScript:Void(0);"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              For &#39;top&#39; variant - &lt;VfBanner
              banner__type=&quot;top&quot;
              banner__inline_href=&quot;JavaScript:Void(0);&quot;/&gt; For
              &#39;fixed&#39; variant - &lt;VfBanner
              banner__type=&quot;fixed&quot; banner__text=&quot;I agree, dismiss
              this banner&quot;/&gt;
            </code>
          </pre>
        </details>
      </article>
    </section>
  );
}

export default VFBanner;
