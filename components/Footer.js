import React from 'react';
import { getCurrentYear } from './../helpers';
import { siteName, address, contact, social } from './../global-config';
import './Footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-4 site-footer__col">
          <p className="heading">
            <strong>{siteName}</strong>
          </p>
          <p>
            {address.street}
            <br /> {address.city}, {address.state} {address.zipCode}
          </p>
          <div>
            <iframe
              title="nicola kitchen google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1947394787594!2d-118.59239268484637!3d34.16693841912481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29eb79ebfbf67%3A0xa2e5abf120db0788!2sNicola&#39;s+Kitchen!5e0!3m2!1sen!2sus!4v1521421486407"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: 0
              }}
              allowFullScreen
            />
          </div>
        </div>

        <div className="col-md-4 site-footer__col site-footer__links">
          <p className="heading">
            <strong>Hours</strong>
          </p>
          <ul className="list-unstyled hours">
            <li>
              <strong className="mr-1">Mon</strong>
              <span>11:00am - 9:00pm</span>
            </li>
            <li>
              <strong className="mr-1">Tue-Thu</strong>
              <span>8:00am - 9:00pm</span>
            </li>
            <li>
              <strong className="mr-1">Fri</strong>
              <span>8:00am - 10:00pm</span>
            </li>
            <li>
              <strong className="mr-1">Sat</strong>
              <span>8:00am - 10:00pm</span>
            </li>
            <li>
              <strong className="mr-1">Sun</strong>
              <span>8:00am - 9:00pm</span>
            </li>
          </ul>
        </div>
        <div className="col-md-4 site-footer__col site-footer__social">
          <p className="heading">
            <strong>Contact us</strong>
          </p>
          <p>
            <a href={`tel:${contact.phone.raw}`} className="text-dark">
              {contact.phone.display}
            </a>
            <br />
            <a href={`mailto:${contact.email}`} className="text-dark">
              {contact.email}
            </a>
          </p>

          <p className="heading">
            <strong>We are Social</strong>
          </p>
          <ul className="list-unstyled list-inline">
            {social.twitter && (
              <li>
                <a href={social.twitter}>
                  <img src="/static/assets/social/twitter.svg" alt="twitter" />
                </a>
              </li>
            )}
            {social.yelp && (
              <li>
                <a href={social.yelp}>
                  <img src="/static/assets/social/yelp.svg" alt="yelp" />
                </a>
              </li>
            )}
            {social.instagram && (
              <li>
                <a href={social.instagram}>
                  <img src="/static/assets/social/instagram.svg" alt="instagram" />
                </a>
              </li>
            )}
            {social.facebook && (
              <li>
                <a href={social.facebook}>
                  <img src="/static/assets/social/facebook.svg" alt="facebook" />
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="col-lg-12 site-footer__copyright text-center">
          <span id="copyright-year">{getCurrentYear()}</span> &copy; {siteName}, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
