import React from "react";
import VfHero from "./vf-hero.react";

function VFHero() {
  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">
      <section className="vf-intro" id="about">
        <div></div>

        <div className="vf-stack">
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">
            Hero
            <a
              href="https://stable.visual-framework.dev/guidance/component-types/"
              className="vf-badge vf-badge--primary vf-badge--phases"
            >
              container
            </a>
          </h1>
          <p className="vf-lede">
            <span>
              The <code>vf-hero</code> component is to be used as a visual queue
              and page header. As needed, it can take a kicker, heading,
              sub-heading, text content, and a 'call to action' link.
            </span>
          </p>

          <p className="vf-intro__text">
            <a
              className="vf-link"
              href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-hero"
            >
              <img
                src="https://img.shields.io/badge/github-vf--hero-blue"
                alt="github location"
              />
            </a>
            <a
              className="vf-link"
              href="https://badge.fury.io/js/%40visual-framework%2Fvf-hero"
            >
              <img
                src="https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg"
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
          <p>
            By default the <code>vf-hero</code> makes use of the roundels
            background image. To keep the raw structure of the HTML and CSS the
            same this is applied using a CSS custom property. The default
            variant is equivalent to <code>vf-hero--1200</code>.
          </p>
          <h3>Hero background images</h3>
          <p>You can bring your own image to use with the vf-hero.</p>
          <ul>
            <li>
              Size: recommended image size for a typical hero is 3000 by 1000
              pixels.
            </li>
            <li>
              Positioning: people and other important imagery should be placed
              on the right side. The image will, by default, vertically centre
              and align to the right side.
            </li>
            <li>
              Imagery: most of the image should be abstract as to not visually
              compete with the text in the hero box.
            </li>
            <li>Text: do not use raster text as part of the image.</li>
            <li>
              Consult design: the image should be made in consultation with your
              organisation's design team for brand alignment and input on how
              best to create it.
            </li>
          </ul>
          <h3>Content</h3>
          <table>
            <thead>
              <tr>
                <th>Content name</th>
                <th>Usage</th>
                <th>
                  <code>.yml</code> key
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading</td>
                <td>To be used for the heading of the page.</td>
                <td>
                  <code>vf_hero_heading</code>
                </td>
              </tr>
              <tr>
                <td>Heading HREF</td>
                <td>
                  To be used as a 'return to home' link for the micro site.
                </td>
                <td>
                  <code>vf_hero_heading_href</code>
                </td>
              </tr>
              <tr>
                <td>Subheading</td>
                <td>
                  Optional content to be used along with the Heading for a terse
                  explainer.
                </td>
                <td>
                  <code>vf_hero_subheading</code>
                </td>
              </tr>
              <tr>
                <td>Kicker</td>
                <td>
                  Optional content that helps define the context of overall
                  content of the page.
                </td>
                <td>
                  <code>vf_hero_kicker</code>
                </td>
              </tr>
              <tr>
                <td>Text</td>
                <td>
                  Optional content that can help explain the page content in a
                  brief paragraph.
                </td>
                <td>
                  <code>vf_hero_text</code>
                </td>
              </tr>
              <tr>
                <td>Link Text</td>
                <td>
                  The text for the hero 'call to action' link. Only works if
                  there is associated Link HREF.
                </td>
                <td>
                  <code>vf_hero_link_text</code>
                </td>
              </tr>
              <tr>
                <td>Link HREF</td>
                <td>
                  The url that the Link Text would be pointing to and opens in
                  the same browser tab. This only works if there is associated
                  Link Text
                </td>
                <td>
                  <code>vf_hero_link_href</code>
                </td>
              </tr>
              <tr>
                <td>Spacing</td>
                <td>
                  If added spacing can be any of these values only : 200, 400,
                  500, 600, 800, 1200, 1600
                </td>
                <td>'spacing'</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Content name</th>
                <th>
                  <code>.yml</code> key
                </th>
                <th>CSS classname</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kicker</td>
                <td>
                  <code>vf_hero_kicker</code>
                </td>
                <td>
                  <code>vf-hero__kicker</code>
                </td>
              </tr>
              <tr>
                <td>Heading</td>
                <td>
                  <code>vf_hero_heading</code>
                </td>
                <td>
                  <code>vf-hero__heading</code>
                </td>
              </tr>
              <tr>
                <td>Heading HREF</td>
                <td>
                  <code>vf_hero_heading_href</code>
                </td>
                <td>
                  <code>vf-hero__heading_link</code>
                </td>
              </tr>
              <tr>
                <td>Subheading</td>
                <td>
                  <code>vf_hero_subheading</code>
                </td>
                <td>
                  <code>vf-hero__subheading</code>
                </td>
              </tr>
              <tr>
                <td>Text</td>
                <td>
                  <code>vf_hero_text</code>
                </td>
                <td>
                  <code>vf-hero__text</code>
                </td>
              </tr>
              <tr>
                <td>Link Text</td>
                <td>
                  <code>vf_hero_link_text</code>
                </td>
                <td>
                  <code>vf-hero__link</code>
                </td>
              </tr>
              <tr>
                <td>Link HREF</td>
                <td>
                  <code>vf_hero_link_href</code>
                </td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
          <h3>CSS Custom Properties</h3>
          <p>
            <code>--vf-hero--bg-image</code> — this is for the url for the
            background image. It can either be added, inline if you're writing
            the HTML, using the <code>.yml</code> data source of{" "}
            <code>vf_hero_image</code>, or by other needs (a input or upload in
            WordPress, for example).
          </p>
          <p>
            <code>---vf-hero--bg-image-size</code> — this is to determine the
            sizing of the background image. As group sites are using the roundel
            image it needs specific dimensions so that it works. These
            dimensions are <code>auto 28.5rem</code>. We use a fallback here as
            background images in <code>vf-hero</code> should be full bleed by
            default so the fall back in the CSS is for cover —{" "}
            <code>var(---vf-hero--bg-image-size, cover)</code>.
          </p>
          <h3>Internet Explorer support</h3>
          <p>
            IE 11 will get the background colour and the &quot;roundels&quot;
            image. Under the approach of progressive enhancement, IE 11 will not
            paint a different background image if added.
          </p>
          <h3>EMBL usage</h3>
          <p>
            For EMBL sites, the <code>vf-hero</code> can take an image (provided
            by Design) which should be uploaded to{" "}
            <a href="https://www.embl.org/files">the files site</a> and applied
            using the custom property available (
            <code>--vf-hero--bg-image</code>).
          </p>
          <h3>React</h3>
          <p>
            As of version 4.0.0-alpha.2 vf-hero has experimental React support
            which has been tested on react version 18.2.0
          </p>
          <ol>
            <li>
              <p>
                Install <code>yarn add @visual-framework/vf-hero</code>
              </p>
            </li>
            <li>
              <p>
                Import in the JS file where you want to include this component
              </p>
              <pre>
                <code>
                  import VfHero from '@visual-framework/vf-hero/vf-hero.react';<br/>
                  Make sure you have the jsx support enabled with babel.<br/>
                  Alternatively, you can also copy the vf-hero.react.js file from below to your react project and import as per the location.<br/>
                </code>
              </pre>
            </li>
            <li>
              <p>Can be used as</p>
              <pre>
                <code>
                  &lt;VfHero id=&quot;0&quot; vf_hero_kicker=&quot;&lt;a
                  href=JavaScript:Void(0);&gt;VF Hamburg&lt;/a&gt; | Structural
                  Biology&quot; vf_hero_heading=&quot;About the Hentze
                  group!&quot;
                  vf_hero_heading_href=&quot;'JavaScript:Void(0);'&quot;
                  vf_hero_subheading=&quot;an example of some ancillary
                  text&quot; vf_hero_text=
                  {[
                    <>
                      The Hentze group combines biochemical and{" "}
                      <a href="#">systems–level approaches</a> to investigate
                      the connections between <a href="#">gene expression</a>{" "}
                      and <a href="#">cell metabolism</a>, and their roles in
                      human disease.
                    </>,
                  ]}
                  vf_hero_link_text=&quot;Learn more&quot;
                  vf_hero_link_href=&quot;'JavaScript:Void(0);'&quot;
                  vf_hero_image_size=&quot;auto 28.5rem&quot; /&gt;
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
                  $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';<br/>
                  $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';<br/>
                  @import '~@visual-framework/vf-box/vf-box.scss';<br/>
                  @import '~@visual-framework/vf-stack/vf-stack.scss';<br/>
                  @import '~@visual-framework/vf-u-fullbleed/vf-u-fullbleed.scss';<br/>
                  @import '~@visual-framework/vf-hero/vf-hero.scss';<br/>
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
          id="vf-hero--default"
        >
          <a href="#vf-hero--default">Default variant</a>
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
        style={{ clear: "both" }} // insurance against strange components
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
          <VfHero
            vf_hero_kicker={
              <>
                <a href="JavaScript:Void(0);">VF Hamburg</a> | Structural
                Biology
              </>
            }
            vf_hero_heading="About the Hentze group!"
            vf_hero_heading_href="JavaScript:Void(0);"
            vf_hero_subheading="an example of some ancillary text"
            vf_hero_text={[
              <>
                The Hentze group combines biochemical and{" "}
                <a href="JavaScript:Void(0);">systems–level approaches</a> to
                investigate the connections between{" "}
                <a href="JavaScript:Void(0);">gene expression</a> and{" "}
                <a href="JavaScript:Void(0);">cell metabolism</a>, and their
                roles in human disease.
              </>,
            ]}
            vf_hero_link_text="Learn more"
            vf_hero_link_href="JavaScript:Void(0);"
            vf_hero_image_size="auto 28.5rem"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfHero id=&quot;0&quot; vf_hero_kicker=&quot;&lt;a
              href=JavaScript:Void(0);&gt;VF Hamburg&lt;/a&gt; | Structural
              Biology&quot; vf_hero_heading=&quot;About the Hentze group!&quot;
              vf_hero_heading_href=&quot;&#39;JavaScript:Void(0);&#39;&quot;
              vf_hero_subheading=&quot;an example of some ancillary text&quot;
              vf_hero_text=
              {[
                <>
                  &quot;The Hentze group combines biochemical and &lt;a
                  href=#&gt;systems–level approaches&lt;/a&gt; to investigate
                  the connections between &lt;a href=#&gt;gene
                  expression&lt;/a&gt; and &lt;a href=#&gt;cell
                  metabolism&lt;/a&gt;, and their roles in human disease.&quot;
                </>,
              ]}{" "}
              vf_hero_link_text=&quot;Learn more&quot;
              vf_hero_link_href=&quot;&#39;JavaScript:Void(0);&#39;&quot;
              vf_hero_image_size=&quot;auto 28.5rem&quot; /&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-hero--default-with-image"
        >
          <a href="#vf-hero--default-with-image">Default With Image variant</a>
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
        style={{ clear: "both" }} // insurance against strange components
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
          <VfHero
            id="top"
            vf_hero_kicker={
              <>
                <a href="JavaScript:Void(0);">VF Hamburg</a> | Structural
                Biology
              </>
            }
            vf_hero_heading="About the Hentze group!"
            vf_hero_subheading="an example of some ancillary text"
            vf_hero_text={[
              <>
                The Hentze group combines biochemical and{" "}
                <a href="JavaScript:Void(0);">systems–level approaches</a> to
                investigate the connections between{" "}
                <a href="JavaScript:Void(0);">gene expression</a> and{" "}
                <a href="JavaScript:Void(0);">cell metabolism</a>, and their
                roles in human disease.
              </>,
            ]}
            vf_hero_link_text="Learn more"
            vf_hero_link_href="JavaScript:Void(0);"
            vf_hero_image="url(https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/vf-hero-intense.png)"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfHero id=&quot;1&quot; vf_hero_kicker=&quot;&lt;a
              href=JavaScript:Void(0);&gt;VF Hamburg&lt;/a&gt; | Structural
              Biology&quot; vf_hero_heading=&quot;About the Hentze group!&quot;
              vf_hero_subheading=&quot;an example of some ancillary text&quot;
              vf_hero_text=
              {[
                <>
                  The Hentze group combines biochemical and &lt;a
                  href=#&gt;systems–level approaches&lt;/a&gt; to investigate
                  the connections between &lt;a href=#&gt;gene
                  expression&lt;/a&gt; and &lt;a href=#&gt;cell
                  metabolism&lt;/a&gt;, and their roles in human disease.&quot;
                </>,
              ]}{" "}
              vf_hero_link_text=&quot;Learn more&quot;
              vf_hero_link_href=&quot;&#39;JavaScript:Void(0);&#39;&quot;
              vf_hero_image=&quot;url(https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/vf-hero-intense.png)&quot;
              /&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-hero--spacing-(400)"
        >
          <a href="#vf-hero--spacing-(400)">Spacing 400 variant</a>
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
          style={{
            overflow: "auto",
            backgroundImage:
              "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
            backgroundSize: "20px 20px",
            backgroundPositionX: "0px, 10px, 10px, 0px",
            backgroundPositionY: "0px, 0px, -10px, 10px",
          }}
        >
          <VfHero
            spacing={400}
            vf_hero_heading="A journey through bioinformatics"
            vf_hero_text={["Explore resources from EMBL-EBI"]}
            vf_hero_image_size="auto 28.5rem"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfHero id=&quot;2&quot; spacing=&quot;400&quot;
              vf_hero_heading=&quot;A journey through bioinformatics&quot;
              vf_hero_text={[<>&quot;Explore resources from EMBL-EBI&quot;</>]}{" "}
              vf_hero_image_size=&quot;auto 28.5rem&quot; /&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-hero--spacing-(800)"
        >
          <a href="#vf-hero--spacing-(800)">Spacing 800 variant</a>
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
          style={{
            overflow: "auto",
            backgroundImage:
              "linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)",
            backgroundSize: "20px 20px",
            backgroundPositionX: "0px, 10px, 10px, 0px",
            backgroundPositionY: "0px, 0px, -10px, 10px",
          }}
        >
          <VfHero
            spacing={800}
            vf_hero_heading="About the Hentze group!"
            vf_hero_link_text="Learn more"
            vf_hero_link_href="JavaScript:Void(0);"
            vf_hero_image_size="auto 28.5rem"
          />
        </div>

        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfHero id=&quot;3&quot; spacing=&quot;800&quot;
              vf_hero_heading=&quot;About the Hentze group!&quot;
              vf_hero_link_text=&quot;Learn more&quot;
              vf_hero_link_href=&quot;#&quot; vf_hero_image_size=&quot;auto
              28.5rem&quot; /&gt;
            </code>
          </pre>
        </details>
      </article>

      <div className="vf-section-header">
        <h2
          className="vf-section-header__heading vf-section-header__heading--is-link"
          id="vf-hero--spacing-(1200)"
        >
          <a href="#vf-hero--spacing-(1200)">Spacing 1200 variant</a>
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
        style={{
          clear: "both" /* insurance against strange components */,
        }}
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
          <VfHero
            spacing={1200}
            vf_hero_heading="About the Hentze group!"
            vf_hero_subheading="an example of some ancillary text"
            vf_hero_link_text="Learn more"
            vf_hero_link_href="JavaScript:Void(0);"
            vf_hero_image_size="auto 28.5rem"
          />
        </div>
        <details className="vf-details vf-box vf-box--outline">
          <summary className="vf-details--summary">React syntax</summary>

          <pre>
            <code>
              &lt;VfHero id=&quot;4&quot; spacing=&quot;1200&quot;
              vf_hero_heading=&quot;About the Hentze group!&quot;
              vf_hero_subheading=&quot;an example of some ancillary text&quot;
              vf_hero_link_text=&quot;Learn more&quot;
              vf_hero_link_href=&quot;#&quot; vf_hero_image_size=&quot;auto
              28.5rem&quot; /&gt;
            </code>
          </pre>
        </details>
      </article>
    </section>
  );
}

export default VFHero;
