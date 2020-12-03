import React from 'react';

class VfIntro extends React.Component {
  render() {
    return (
      <section className="vf-intro | embl-grid embl-grid--has-centered-content">
        <div>
          {/* empty */}
        </div>
        <div>
          <h1 className="vf-intro__heading vf-intro__heading--has-tag">{this.props.name} <a href="#toCome" className="vf-badge vf-badge--primary vf-badge--phases">beta</a></h1>
          <p className="vf-lede">Cancer is a generic term for lots of different diseases in which cells divide many more times than usual. This abnormal growth can affect many cell types in almost any part of the body.</p>
          <p className="vf-intro__text">Cancer is a multi-stage process. Normal cells begin to divide abnormally, spreading beyond their normal boundaries, and abnormal tissue growth causes swellings called tumours to form. Tumours can be benign – with no harmful effect on the body – or malignant, invading healthy tissue and interfering with normal bodily functions.</p>
          <p className="vf-intro__text">There are more than 100 types of cancer and symptoms vary depending on the type. <a className="vf-link" href="#toCome">Read more about Cancer</a>.</p>
        </div>
      </section>
    );
  }
}

export default VfIntro;
