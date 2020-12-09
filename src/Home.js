import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VfIntro from './component-templates/vf-intro';
import './Home.css';

// VF njk templates
// import { VfCard } from './vf-components/vf-core-components/vf-card/vf-card.react.js';
import { VfCard } from "@visual-framework/vf-card/vf-card.react.js"; 
import { vfButton } from "@visual-framework/vf-button/vf-button.react.js"; 

function Home() {
  return (  
    <React.Fragment>
      <VfIntro name="React for the VF 2.0" />

      <section className="embl-grid embl-grid--has-centered-content">
        <div>
        {/* empty */}
        </div>
        <div className="vf-content">
        <h2>Quickstart</h2>
          <pre><code>
            (THIS DOES NOT YET WORK) npm init @visual-framework/vf-react your-new-site-name
          </code></pre>
      <p>This will install a new <a href="https://github.com/visual-framework/vf-react/"><code>vf-react</code></a> to a folder named <code>your-new-site-name</code>.</p>
      <p>Then follow the onscreen prompts and links below to develop and configure.</p>

      <div className="vf-grid vf-grid__col-2">
      <VfCard card_title="React vf-card" variant="striped" newTheme="primary" card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg" card_text="I'm made with a VF component that supports react " card_image__alt="people"></VfCard>
      <VfCard card_title="React vf-card 2" variant="striped" newTheme="primary" card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg" card_text="im some more text" card_image__alt="people"></VfCard>
      </div>



      <h2>What you get</h2>

      <ul>
      <li>a site created with Create React App</li>
      <li>and integrated with the Visual Framework component system</li>
      </ul>

      <h3>Component installation</h3>

      <p>To add a component you can use npm/Yarn or install it manually.</p>
      <p>In either case you'll need to re-run <code>gulp dev</code> to ensure the component is fully loaded.</p>

      <ul>
      <li>installation: <code>yarn add @visual-framework/vf-logo</code></li>
      <li>updating: <code>yarn upgrade-interactive --latest</code></li>
      </ul>

      <h3>Manual installation for customisation</h3>

      <ol>
      <li>Download a pattern</li>
      <li>Copy it to <code>./vf-components/vf-component-name</code></li>
      </ol>

      <h3>Add your own local component</h3>
      <p>You can add a custom VF-compatible component to <code>./vf-components</code> and use it in
      your site.</p>

      <ul>
      <li><code>gulp vf-component</code></li>
      </ul>

      </div>
      </section>

      <section className="embl-grid embl-grid--has-centered-content">
          <div>
          {/* empty */}
          </div>
          <div>
            <ul className="vf-navigation__list | vf-list--inline">
              <li className="vf-navigation__item">
                <NavLink className="vf-button vf-button--primary" to="/testpage" activeClassName="vf-local-overrides--hidden">Go to the Test page</NavLink>
                {/* 
                <VfButton text="Go to the test page" theme="Primary" button_href="/" />
                VfButton currently does not work as we need to add support for common VF Nunjucks extensions, like spaceless
                 */}
              </li>
            </ul>
          </div>
        </section>

    </React.Fragment>
  );
}

export default Home;
