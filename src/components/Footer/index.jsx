import React from 'react';

function Footer() {
  return (
    <footer className="vf-footer | vf-search-client-side--no-index">
      <div className="vf-footer__inner">
        <p className="vf-footer__notice">The Visual Framework is a toolkit to quickly and collaboratively build better life science websites.</p>
        <p className="vf-footer__notice">
          It is open source and used on dozens of life science websites and maintained by a community of front-end developers, UX specialists, and designers.
          <a className="vf-footer__link" href="https://stable.visual-framework.dev/guidance/discussing-the-vf">Get involved</a>.
        </p>
        <div className="vf-footer__links-group | vf-grid vf-grid__col-5">
          <div className="vf-links">
            <ul className="vf-links__list | vf-list">
              <h4 className="vf-links__heading">
                <a className="vf-heading__link" href="https://stable.visual-framework.dev/about">About</a>
              </h4>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/about/faq">FAQ</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/about/roadmap">Roadmap</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/about/consultation">Consultation process</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/updates">Updates and blog</a>
              </li>
            </ul>
          </div>
          <div className="vf-links">
            <ul className="vf-links__list | vf-list">
              <h4 className="vf-links__heading">
                <a className="vf-heading__link" href="https://stable.visual-framework.dev/building">Building</a>
              </h4>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/components">Component list</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/patterns">Patterns and examples</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/guidance">Guidance and principles</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/troubleshooting">Troubleshooting</a>
              </li>
            </ul>
          </div>
          <div className="vf-links">
            <h4 className="vf-links__heading">
              <a className="vf-heading__link" href="https://stable.visual-framework.dev/developing">Developing</a>
            </h4>
            <ul className="vf-links__list | vf-list">
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/developing/getting-started/setting-up">Setting up</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/developing/getting-started/code-of-conduct">Code of conduct</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/developing/getting-started/pull-requests">Making a Pull Request</a>
              </li>
            </ul>
          </div>
          <div className="vf-links">
            <h4 className="vf-links__heading">
              <a className="vf-heading__link" href="https://github.com/visual-framework/vf-core">Project</a>
            </h4>
            <ul className="vf-links__list | vf-list">
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/search">Search</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://stable.visual-framework.dev/updates">Changelog, updates</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://github.com/visual-framework/vf-core">GitHub</a>
              </li>
              <li className="vf-list__item">
                <a className="vf-list__link" href="https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ">Slack</a>
              </li>
            </ul>
          </div>
          <div className="vf-links"></div>
          <div className="vf-links"></div>
        </div>
        <section className="vf-footer__legal | vf-grid vf-grid__col-1">
          <span className="vf-footer__legal-text">
            <a className="vf-footer__link" href="https://www.embl.org/">Brought to you by the developers, designers and UX teams at EMBL and EMBL-EBI</a>
          </span>
          <span className="vf-footer__legal-text">
            <a className="vf-footer__link" href="https://goo.gl/maps/nbxNg2HGXL1MTtzt9">Meyerhofstraße 1, 69117 Heidelberg, Germany</a>
          </span>
          <span className="vf-footer__legal-text">
            <a className="vf-footer__link" href="tel:004962213870">Tel: +49 6221 387-0</a>
          </span>
        </section>
        <section className="vf-footer__legal">
          <span className="vf-footer__legal-text">
            Latest release: <code className="">v2.5.21</code>
            <a href="https://stable.visual-framework.dev/updates" className="vf-footer__link">See more releases</a>
          </span>
          <span className="vf-footer__legal-text">
            <a className="vf-footer__link" href="https://stable.visual-framework.dev/feed.xml">RSS Feed</a>
          </span>
          <span className="vf-footer__legal-text">
            Code license is <a className="vf-footer__link" href="https://github.com/visual-framework/vf-core/blob/develop/LICENSE">Apache 2.0</a>
          </span>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
