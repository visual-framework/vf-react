import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { vfMegaMenu } from '@visual-framework/vf-mega-menu/vf-mega-menu';

function Header() {
  const handleMenuClick = useCallback((event) => {
    // Only handle if screen width > 768px
    if (window.innerWidth > 768) {
      const sectionId = event.currentTarget.getAttribute('data-vf-js-mega-menu-section-id');
      if (!sectionId) return;

      event.preventDefault();
      
      const section = document.querySelector(
        `[data-vf-js-mega-menu-section="${sectionId}"]`
      );
      
      if (!section) return;

      // Toggle the section visibility
      const isHidden = section.getAttribute('aria-hidden') === 'true';
      section.setAttribute('aria-hidden', !isHidden);
      
      // Toggle the expanded state of the link
      event.currentTarget.classList.toggle('is-expanded');
      
      // Hide other sections
      document.querySelectorAll('.vf-mega-menu__content__section').forEach(otherSection => {
        if (otherSection !== section) {
          otherSection.setAttribute('aria-hidden', 'true');
        }
      });
      
      // Remove expanded state from other links
      document.querySelectorAll('.vf-mega-menu__link').forEach(link => {
        if (link !== event.currentTarget) {
          link.classList.remove('is-expanded');
        }
      });
    }
  }, []);

  useEffect(() => {
    // Handle clicks outside menu to close it
    const handleClickOutside = (event) => {
      const megaMenu = document.querySelector('.vf-mega-menu__content');
      const menuLinks = document.querySelectorAll('.vf-mega-menu__link');
      let clickedInside = false;

      menuLinks.forEach(link => {
        if (link.contains(event.target)) {
          clickedInside = true;
        }
      });

      if (megaMenu && !megaMenu.contains(event.target) && !clickedInside) {
        document.querySelectorAll('.vf-mega-menu__content__section').forEach(section => {
          section.setAttribute('aria-hidden', 'true');
        });
        document.querySelectorAll('.vf-mega-menu__link').forEach(link => {
          link.classList.remove('is-expanded');
        });
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="vf-stack">
      <header className="vf-global-header vf-mega-menu" data-vf-js-mega-menu role="menubar">
        <Link to="/" className="vf-logo | vf-logo--has-text">
          <img className="vf-logo__image" src="https://stable.visual-framework.dev/assets/vf-logo/assets/logo.svg" alt="Visual Framework" loading="eager" />
          <span className="vf-logo__text">Visual Framework</span>
        </Link>

        <nav className="vf-navigation vf-navigation--global | vf-cluster">
          <ul className="vf-navigation__list | vf-list | vf-cluster__inner">
            <li className="vf-navigation__item">
              <Link 
                to="/about" 
                className="vf-navigation__link vf-mega-menu__link vf-mega-menu__link--has-section" 
                data-vf-js-mega-menu-section-id="about-content-section"
                onClick={handleMenuClick}
              >
                About
              </Link>
            </li>
            <li className="vf-navigation__item">
              <Link 
                to="/components" 
                className="vf-navigation__link vf-mega-menu__link vf-mega-menu__link--has-section" 
                data-vf-js-mega-menu-section-id="components-content-section"
                onClick={handleMenuClick}
              >
                Components
              </Link>
            </li>
            <li className="vf-navigation__item">
              {/* External links should remain as <a> tags */}
              <a href="https://github.com/visual-framework/vf-core" className="vf-navigation__link vf-mega-menu__link">GitHub</a>
            </li>
            <li className="vf-navigation__item">
              <a href="https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ" className="vf-navigation__link vf-mega-menu__link">Slack</a>
            </li>
            <li className="vf-navigation__item">
              <Link 
                to="/search" 
                className="vf-navigation__link vf-mega-menu__link" 
                data-vf-js-mega-menu-section-id="search-content-section"
                onClick={handleMenuClick}
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="vf-mega-menu__content">
        <div 
          className="vf-mega-menu__content__section" 
          data-vf-js-mega-menu-section="about-content-section" 
          role="menu" 
          aria-hidden="true"
        >
          <section className="vf-summary-container | embl-grid">
            <div className="vf-section-header">
              <h2 className="vf-section-header__heading">The Visual Framework</h2>
              <p className="vf-section-header__text">Good defaults and technical flexibility for life science websites</p>
              <p className="vf-section-header__text">
                <Link to="https://stable.visual-framework.dev/about">Learn about the framework</Link>
              </p>
            </div>
            <div className="vf-section-content | vf-grid vf-grid__col-3">
              <div>
                <div className="vf-section-header">
                  <h2 className="vf-section-header__heading"></h2>
                </div>
                <nav className="vf-navigation vf-navigation--main">
                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--400">
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/design-principles" className="vf-navigation__link">Principles</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/updates" className="vf-navigation__link">Updates and blog</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/about/roadmap" className="vf-navigation__link">Roadmap</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/about/faq" className="vf-navigation__link">FAQ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <div className="vf-section-header">
                  <h2 className="vf-section-header__heading"></h2>
                </div>
                <nav className="vf-navigation vf-navigation--main">
                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--400">
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/guidance" className="vf-navigation__link">Guidance</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/design-tokens" className="vf-navigation__link">Design tokens</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/design-kit" className="vf-navigation__link">Figma resources</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/troubleshooting" className="vf-navigation__link">Troubleshooting</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <div className="vf-section-header">
                  <h2 className="vf-section-header__heading"></h2>
                </div>
                <nav className="vf-navigation vf-navigation--main">
                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--400">
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/developing" className="vf-navigation__link">Contributing and developing</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/developing/getting-started/setting-up" className="vf-navigation__link">Setting up your development environment</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="https://stable.visual-framework.dev/guidance/creating-components" className="vf-navigation__link">Creating a component</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
        <div 
          className="vf-mega-menu__content__section" 
          data-vf-js-mega-menu-section="components-content-section" 
          role="menu" 
          aria-hidden="true"
        >
          <section className="vf-summary-container">

            <section className="vf-grid">
              <div className="vf-section-content | vf-grid vf-grid__col-4">
                <article className="vf-stack vf-stack--400">

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading"> Container</h2>
                  </div>

                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--200">

                    <li className="vf-navigation__item">
                      <Link to="/components/vf-banner" className="vf-navigation__link">Banner</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="/components/vf-hero" className="vf-navigation__link">Hero</Link>
                    </li>
                  </ul>
                </article>

                <article className="vf-stack vf-stack--400">

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading"> Block</h2>
                  </div>

                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--200">
                    <li className="vf-navigation__item">
                      <Link to="/components/vf-back-to-top" className="vf-navigation__link">Back to top</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="/components/vf-card" className="vf-navigation__link">Card</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="/components/vf-tabs" className="vf-navigation__link">Tabs</Link>
                    </li>
                  </ul>
                </article>

                <article className="vf-stack vf-stack--400">

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading"> Element</h2>
                  </div>

                  <ul className="vf-navigation__list | vf-list | vf-cluster__inner | vf-stack vf-stack--200">

                    <li className="vf-navigation__item">
                      <Link to="/components/vf-badge" className="vf-navigation__link">Badge</Link>
                    </li>

                    <li className="vf-navigation__item">
                      <Link to="/components/vf-blockquote" className="vf-navigation__link">Blockquote</Link>
                    </li>
                    <li className="vf-navigation__item">
                      <Link to="/components/vf-button" className="vf-navigation__link">Button</Link>
                    </li>
                  </ul>
                </article>
                <article className="vf-stack vf-stack--400">

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading vf-section-header__heading--is-link">
                      <Link to="https://stable.visual-framework.dev/components#form">Forms</Link>
                      <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="evenodd"></path>
                      </svg>
                    </h2>
                  </div>

                  <div><hr className="vf-divider" /></div>

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading vf-section-header__heading--is-link">
                      <Link to="https://stable.visual-framework.dev/components#utility">Utility</Link>
                      <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="evenodd"></path>
                      </svg>
                    </h2>
                  </div>

                  <div><hr className="vf-divider" /></div>

                  <div className="vf-section-header">
                    <h2 className="vf-section-header__heading vf-section-header__heading--is-link">
                      <Link to="https://stable.visual-framework.dev/components#tools">Tools</Link>
                      <svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fillRule="evenodd"></path>
                      </svg>
                    </h2>
                  </div>

                </article>
              </div>
            </section>
          </section>
        </div>
        <div 
          className="vf-mega-menu__content__section" 
          data-vf-js-mega-menu-section="search-content-section" 
          role="menu" 
          aria-hidden="true"
        >
          <section className="embl-grid embl-grid--has-centered-content">
            <div className="vf-section-header">
              <h2 className="vf-section-header__heading" id="search"> Search</h2>
            </div>

            <form action="/search/" method="GET" className="vf-form vf-form--search vf-form--search--responsive | vf-sidebar vf-sidebar--end">
              <div className="vf-sidebar__inner">
                <div className="vf-form__item | vf-search__item">
                  <label className="vf-form__label vf-u-sr-only | vf-search__label" htmlFor="search_query" />
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
                <button type="submit" className="vf-search__button | vf-button vf-button--primary">
                  <span className="vf-button__text">Search</span>
                  <svg className="vf-icon vf-icon--search-btn | vf-button__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 140 140" width="140" height="140">
                    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                      <path d="M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z" fill="#FFFFFF" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" />
                    </g>
                  </svg>
                </button>
              </div>
            </form>
            <div></div>
          </section>
        </div>
      </div>
      </div>
  );
}

export default Header;
