import React from 'react';
import VfIntro from './component-templates/vf-intro';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <VfIntro name="Eleventy for the VF 2.0" />

      <section className="embl-grid embl-grid--has-centered-content">
        <div>
        {/* empty */}
        </div>
        <div>
          Content to come
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
