import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { capitalize } from './../helpers';
import { siteName } from './../global-config';

import './Header.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  state = {
    mobileMenuOpen: false,
    showBackToTop: false
  };

  componentDidMount() {
    this.initBackToTop();
  }

  initBackToTop = () => {
    const vm = this;

    window.addEventListener('scroll', function scrollhandler() {
      const offsetY = this.pageYOffset || document.documentElement.scrollTop || null;
      if (offsetY > 300) {
        vm.setState({
          showBackToTop: true
        });
      }

      if (offsetY <= 300) {
        vm.setState({
          showBackToTop: false
        });
      }
    });
  };

  scrollToTop = e => {
    e.preventDefault();

    (function smoothScroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  };

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  };

  closeMobileMenu = e => {
    e.preventDefault();

    this.setState({
      mobileMenuOpen: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{`${siteName} | ${capitalize(this.props.title)}`}</title>
          <link rel="stylesheet" href="/static/nprogress.css" />
        </Head>
        <header>
          <div id="top-nav" className="top-nav">
            <div className="top-nav__wrapper container-fluid d-flex justify-content-between align-items-center">
              <Link href="/">
                <a className="brand">{siteName}</a>
              </Link>

              <nav className="nav-links d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">
                <Link href="/">
                  <a className={this.props.title === 'home' ? 'active' : ''}>Home</a>
                </Link>
                <Link href="/about">
                  <a className={this.props.title === 'about' ? 'active' : ''}>About Us</a>
                </Link>
                <Link href="/menu">
                  <a className={this.props.title === 'menu' ? 'active' : ''}>Menu</a>
                </Link>
                <Link href="/catering">
                  <a className={this.props.title === 'catering' ? 'active' : ''}>Catering</a>
                </Link>
              </nav>

              <div id="nav-toggle" className="nav-toggle d-md-none" onClick={this.toggleMobileMenu}>
                <i className="fa fa-bars" />
              </div>
            </div>
          </div>

          <nav id="mobile-nav" className={`mobile-nav d-md-none${this.state.mobileMenuOpen ? ' is-shown' : ''}`}>
            <a href="#" id="close-mobile-nav" className="close-mobile-nav" onClick={this.closeMobileMenu}>
              <i className="fa fa-close" />
            </a>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </nav>
        </header>
        <i
          id="back-to-top"
          className={`back-to-top fa fa-arrow-circle-o-up${this.state.showBackToTop ? ' is-visible' : ''}`}
          onClick={this.scrollToTop}
        />
      </React.Fragment>
    );
  }
}
