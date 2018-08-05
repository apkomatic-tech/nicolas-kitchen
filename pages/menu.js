import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Menu from './../components/Menu';
import './menu.scss';
import { menu as MENU_DATA } from './../data/menu.json';
import { siteName } from './../global-config';

export default () => (
  <div id="nc-site">
    <Header title="menu" />
    <div className="container">
      <h2 className="text-center" style={{ margin: '3rem 0' }}>
        {siteName} Menu
      </h2>
      <Menu initialMenu={MENU_DATA} />
    </div>
    <Footer />
  </div>
);
