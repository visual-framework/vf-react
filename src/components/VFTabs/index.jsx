import React from "react";
import VfTabs from "./vf-tabs.react";

const defaultTabsdata = [
  [
    { tab_title: "Section" },
    { tab_number: 58 },
    { tab_heading: "Section 1" },
    { tab_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit." }
  ],
  [
    { tab_title: "A Short Section" },
    { tab_number: 546 },
    { tab_heading: "Section 2" },
    { tab_content: "Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl." }
  ]
];

const nestedTabsdata = [
  [
    { tab_title: `Section` },
    { tab_number: 1 },
    { tab_heading: `Section 1` },
    { tab_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.` }
  ],
  [
    { tab_title : `A Short Section` },
    { tab_number: 2 },
    { tab_heading: `Section 2` },
    { tab_content: `Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.` }
  ],
  [
    { tab_title: `Section` },
    { tab_number: 58 },
    { tab_heading: `Section 1` },
    { tab_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.` }
  ],
  [
    { tab_title: `A Short Section` },
    { tab_number: 546 },
    { tab_heading: `Section 2` },
    { tab_content: `Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.` }
  ],
  [
    { tab_title: `A Rather Long Section` },
    { tab_number: 878 },
    { tab_heading: `Section 3` },
    { tab_content: `Phasellus ac tristique orci. Nulla maximus <a class='vf-link' href='#'>justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class='vf-link' href='#'>pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.` }
  ],
  [
    { tab_title: `Nested Tabs` },
    { tab_number: 8793456 },
    { tab_heading: `Section 4` },
    { tab_content: `
          <div class="vf-tabs">
            <ul class="vf-tabs__list" data-vf-js-tabs>
              <li class="vf-tabs__item">
                <a class="vf-tabs__link" href="#vf-tabs__section-nested--234548">Nested tab 1</a>
              </li>
              <li class="vf-tabs__item">
                <a class="vf-tabs__link" href="#vf-tabs__section-nested--29974">Nested tab 2</a>
              </li>
            </ul>
          </div>

          <div class="vf-tabs-content" data-vf-js-tabs-content>
            <section class="vf-tabs__section" id="vf-tabs__section-nested--234548">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
            </section>
            <section class="vf-tabs__section" id="vf-tabs__section-nested--29974">
              <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
            </section>
          </div>`}
  ],
  [
    {tab_title: `A fifth section`},
    {tab_number: 545541},
    {tab_heading: `Section 5`},
    {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
  ],
  [
    {tab_title: `A sixth section`},
    {tab_number: 621211},
    {tab_heading: `Section 6`},
    {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
  ]
];

const deepLinkTabsdata = [
  [
    { tab_title: "Section" },
    { tab_number: 99999 },
    { tab_heading: "Default" },
    { tab_content: "An <a href='/components/vf-tabs#vf-tabs__section--88888'>example deep link</a> loading this anchor will directly activate the neighbouring tab. <code>/components/vf-tabs#vf-tabs__section--88888</code>" }
  ],
  [
    { tab_title: "A Short Section" },
    { tab_number: 88888 },
    { tab_heading: "Deep-linked tab" },
    { tab_content: "If you see me on page load, the deep link has worked." }
  ]
];

function VFTabs() {

  return (
    <section className="vf-content component-library-notes | vf-stack vf-stack--400">

    <section className="vf-intro" id="about">

        <div></div>

        <div className="vf-stack">

            <h1 className="vf-intro__heading vf-intro__heading--has-tag">Tabs

 <a href="https://stable.visual-framework.dev/guidance/component-types/" className="vf-badge vf-badge--primary vf-badge--phases">block</a>
            </h1>
            <p className="vf-lede">
                <span>The ever-useful tabs. This component works best with the included JS, but you can use the CSS styling on other tab implementations, like Bootstrap tabs.</span>
            </p>

            <p className="vf-intro__text">
                <a className="vf-link" href="https://github.com/visual-framework/vf-core/tree/develop/components/vf-tabs"><img src="https://img.shields.io/badge/github-vf--tabs-blue" alt="github location"/></a>
                <a className="vf-link" href="https://badge.fury.io/js/%40visual-framework%2Fvf-tabs"><img src="https://badge.fury.io/js/%40visual-framework%2Fvf-tabs.svg" alt="npm version"/></a>
            </p>
        </div>
    </section>
    <hr className="vf-divider"/>

    <section className="embl-grid">
        <div className="vf-section-header">
            <h2 className="vf-section-header__heading" id="usage"> Usage</h2>
        </div>
        <article>
            <p>These tabs have been made with accessibility in mind, however tabs should be avoided where content structure avoids the need to use tabs.</p>
            <p>Nested tabs are also possible, as demonstrated in the example, however this provides further usability challenges and should be strongly avoided.</p>
            <h3>React</h3>
<p>As of version 2.1.6 vf-tabs has experimental React support which has been tested on react version 18.2.0</p>
<ol>
<li>install <code>yarn add @visual-framework/vf-tabs</code></li>
<li>import in the JS file where you want to include this component<pre><code>import VfTabs from '@visual-framework/vf-tabs/vf-tabs.react';<br/>

Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-tabs.react.js file from below to your react project and import as per the location.
</code></pre>
</li>
<li>can be used as<pre><code>{'<VfTabs {...tabsData}/>'}</code></pre>
                </li>
            </ol>
            <p>Here <code>tabsdata</code> can be declared as below -</p>
            <pre><code>{`public tabsdata = [
  [
    { tab_title: "Section", 
      tab_number: 58,
      tab_heading: "Section 1",
      tab_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan."
    },
    { tab_title: "A Short Section",
      tab_number: 546,
      tab_heading: "Section 2",
      tab_content: "Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus."
    },
    { tab_title: "A Rather Long Section",
      tab_number: 878,
      tab_heading: "Section 3",
      tab_content: "Phasellus ac tristique orci. Nulla maximus <a class='vf-link' href='#'>justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class='vf-link' href='#'>pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa."
    },
    { tab_title: "Nested Tabs",
      tab_number: 8793456,
      tab_heading: "Section 4",
      tab_content: '
          <div className="vf-tabs">
            <ul className="vf-tabs__list" data-vf-js-tabs>
              <li className="vf-tabs__item">
                <a className="vf-tabs__link" href="#vf-tabs__section-nested--234548">Nested tab 1</a>
              </li>
              <li className="vf-tabs__item">
                <a className="vf-tabs__link" href="#vf-tabs__section-nested--29974">Nested tab 2</a>
              </li>
            </ul>
          </div>

          <div className="vf-tabs-content" data-vf-js-tabs-content>
            <section className="vf-tabs__section" id="vf-tabs__section-nested--234548">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
            </section>
            <section className="vf-tabs__section" id="vf-tabs__section-nested--29974">
              <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
            </section>
          </div>'
    },
    { tab_title: "A fifth section",
      tab_number: 545541,
      tab_heading: "Section 5",
      tab_content: "Phasellus ac tristique orci. Nulla maximus <a class=\"vf-link\" href=\"#\">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class=\"vf-link\" href=\"#\">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa."
    },
    { tab_title: "A sixth section",
      tab_number: 621211,
      tab_heading: "Section 6",
      tab_content: "Phasellus ac tristique orci. Nulla maximus <a class=\"vf-link\" href=\"#\">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class=\"vf-link\" href=\"#\">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa."
    },
    { tab_title: "Section",
      tab_number: 99999,
      tab_heading: "Default",
      tab_content: "An <a href=\"/#vf-tabs__section--88888\">example deep link</a> loading this anchor will directly activate the neighbouring tab. <code>/vf-tabs#vf-tabs__section--88888</code>"
    },
    { tab_title: "A Short Section",
      tab_number: 88888,
      tab_heading: "Deep-linked tab",
      tab_content: "If you see me on page load, the deep link has worked."
    }
  ]
];`}</code></pre>
            <ol start="4">
            <li>add beloow to your  CSS file<pre><code>@import '~@visual-framework/vf-sass-config/index.scss';<br/>
@import '~@visual-framework/vf-tabs/vf-tabs.scss';
</code></pre>
you should also install and import  <a href="https://stable.visual-framework.dev/components/vf-sass-starter">vf-sass-starter</a> for the styles</li>

                
            </ol>
            <p>Usage:</p>
            <pre><code>{'<VfTabs {...tabsData}/>'}</code></pre>

            <h3>Deep linking</h3>
            <p>A tab can be activated on page load by passing it on the link <code>#vf-tabs__section-tab_id</code>
            </p>
            <p>This is the default behaviour and can be deactivated when invoking vfTabs:</p>
            <pre><code className="language-js">// vfTabs(scope, activateDeepLinkOnLoad)
vfTabs(document, false);
</code></pre>
            <p>Note: The deep linking feature is not designed with <code>vf-location-nearest</code> compatibility. A <code>vf-location-nearest</code> tab may not respect a deep linked hash url.</p>

        </article>
    </section>

    <h2 id="variants" className="vf-text vf-text-heading--1 vf-text--invert">Variants</h2>

    <div className="vf-section-header">
        <h2 className="vf-section-header__heading vf-section-header__heading--is-link" id="vf-tabs--default">
            <a href="#vf-tabs--default">Default variant</a>
            <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="nonzero"></path>
            </svg>
        </h2>
    </div>

    <article className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
      style={{ clear: 'both' /* insurance against strange components */ }}>
      <div className="vf-u-padding--400"
        style={{
          overflow: 'auto',
          backgroundImage: 'linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPositionX: '0px, 10px, 10px, 0px',
          backgroundPositionY: '0px, 0px, -10px, 10px'
        }}>
        <VfTabs {...defaultTabsdata} />
      </div>
      <details className="vf-details vf-box vf-box--outline">
        <summary className="vf-details--summary">React syntax</summary>
        <pre><code>{'<VfTabs {...tabsData}/>'}</code></pre>
      </details>
    </article>

    <div className="vf-section-header">
        <h2 className="vf-section-header__heading vf-section-header__heading--is-link" id="vf-tabs--nested">
            <a href="#vf-tabs--nested">Nested variant</a>
            <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="nonzero"></path>
            </svg>
        </h2>
    </div>

    <article className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
      style={{ clear: 'both' /* insurance against strange components */ }}>
      <div className="vf-u-padding--400"
        style={{
          overflow: 'auto',
          backgroundImage: 'linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPositionX: '0px, 10px, 10px, 0px',
          backgroundPositionY: '0px, 0px, -10px, 10px'
        }}>
        <VfTabs {...nestedTabsdata} />
      </div>
      <details className="vf-details vf-box vf-box--outline">
        <summary className="vf-details--summary">React syntax</summary>
        <pre><code>{'<VfTabs {...tabsData}/>'}</code></pre>
      </details>
    </article>

    <div className="vf-section-header">
        <h2 className="vf-section-header__heading vf-section-header__heading--is-link" id="vf-tabs--deep-link">
            <a href="#vf-tabs--deep-link">Deep Link variant</a>
            <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="nonzero"></path>
            </svg>
        </h2>
    </div>

    <article className="vf-stack vf-stack--lg vf-u-margin__bottom--1200"
      style={{ clear: 'both' /* insurance against strange components */ }}>
      <div className="vf-u-padding--400"
        style={{
          overflow: 'auto',
          backgroundImage: 'linear-gradient(45deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(135deg, rgba(59, 111, 182, .1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 111, 182, .1) 75%), linear-gradient(135deg, transparent 75%, rgba(59, 111, 182, .1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPositionX: '0px, 10px, 10px, 0px',
          backgroundPositionY: '0px, 0px, -10px, 10px'
        }}>
        <VfTabs {...deepLinkTabsdata} />
      </div>
      <details className="vf-details vf-box vf-box--outline">
        <summary className="vf-details--summary">React syntax</summary>
        <pre><code>{'<VfTabs {...tabsData}/>'}</code></pre>
      </details>
    </article>
    </section>
  );
}

export default VFTabs;
