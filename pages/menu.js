import React from 'react';
import Menu from '../components/Menu';
import { menu as MENU_DATA } from '../data/menu.json';

export default () => (
  <React.Fragment>
    <div className="container">
      <Menu initialMenu={MENU_DATA} />
    </div>
  </React.Fragment>
);
