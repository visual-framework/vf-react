import React from 'react';
import VfIntro from './component-templates/vf-intro';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <VfIntro name="React for the VF 2.0" />

      <section className="embl-grid embl-grid--has-centered-content">
        <div>
        {/* empty */}
        </div>
        <div class="vf-content">
        <h2>Quickstart</h2>
          <pre><code>
            (THIS DOES NOT YET WORK) npm init @visual-framework/vf-react your-new-site-name
          </code></pre>
      <p>This will install a new <a href="https://github.com/visual-framework/vf-react/"><code>vf-react</code></a> to a folder named <code>your-new-site-name</code>.</p>
      <p>Then follow the onscreen prompts and links below to develop and configure.</p>

      <h2>What you get</h2>

      <ul>
      <li>a site created with Create React App</li>
      <li>and integreated with the Visual Framework component system</li>
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
    </React.Fragment>
  );
}

export default Home;
