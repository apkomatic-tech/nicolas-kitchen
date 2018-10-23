import React from 'react';

export default () => (
  <section
    className="about-us"
    style={{
      marginTop: '3rem',
      marginBottom: '3rem'
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <img className="img-fluid" src="/static/assets/owners_bw.jpg" alt="Kate and John (owners)" />
        </div>
        <div className="col-lg-6">
          <h4>About Us</h4>
          <p>
            Established in 1990, Nicola
            {"'"}s Kitchen has been serving the San Fernando Valley for many years. In that time we have developed a
            style of Italian food with influences ranging from the California Coast to the shores of Thailand. We hope
            that you and your family have had the pleasure of experiencing our unique homemade food as well as our
            prompt and friendly service.
          </p>

          <p className="text-right mt-3 text-muted lead">
            <em>Kate &amp; John (owners)</em>
          </p>
        </div>
      </div>
    </div>
  </section>
);
