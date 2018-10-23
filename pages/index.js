import React from 'react';
import Slider from 'react-slick';
import { siteName, reserve, headline1, headline2 } from '../global-config';

const ReserveSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    edgeFriction: 0.1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="reserve-options">
      <div className="container">
        <h3 className="text-center mb-3">Order anywhere. Find us on:</h3>
        <div
          className="reserve-options-slider"
          style={{
            maxWidth: '45rem',
            margin: 'auto'
          }}
        >
          <Slider {...settings}>
            <a
              className="d-flex"
              href="https://www.ubereats.com/los-angeles/food-delivery/nicolas-kitchen/oCnqZRuoT66XNn0gzLVr1g/"
            >
              <img className="img-fluid" src="/static/assets/order/ubereats.png" alt="ubereats" />
            </a>
            <a className="d-flex" href="https://woodland-hills.eat24hours.com/nicola-s-kitchen/39607">
              <img className="img-fluid" src="/static/assets/order/eat24.png" alt="eat24" />
            </a>
            <a
              className="d-flex"
              href="https://www.grubhub.com/restaurant/nicolas-kitchen-20969-ventura-blvd-woodland-hills/272259"
            >
              <img className="img-fluid" src="/static/assets/order/grubhub.png" alt="grubhub" />
            </a>

            <a className="d-flex" href="https://ordering.chownow.com/order/3815/locations">
              <img className="img-fluid" src="/static/assets/order/chownow.png" alt="chownow" />
            </a>
            <a className="d-flex" href="https://foursquare.com/v/nicolas-kitchen/4b43b2fef964a520d0e625e3">
              <img
                className="img-fluid"
                src="/static/assets/order/foursquare.png"
                alt="foursquare"
                style={{ height: '71px' }}
              />
            </a>
            <a className="d-flex" href="https://postmates.com/merchant/nicolas-kitchen-woodland-hills">
              <img className="img-fluid" src="/static/assets/order/postmates.png" alt="postmates" />
            </a>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <React.Fragment>
    {/* Hero */}
    <div className="nc-hero jumbotron">
      <div className="container animated fade-in-up">
        <h1 className="heading">{siteName}</h1>
        <p className="lead my-0">{headline1}</p>
        <div className="cta-container">
          <a href={reserve.reserveHeroLink} className="cta text-white">
            Reserve a table
            <i className="fa fa-yelp" />
          </a>
        </div>
        <p className="lead">{headline2}</p>
      </div>
    </div>
    {/* Reserve Options Callout */}
    <ReserveSlider />
  </React.Fragment>
);
