import React, { Component } from 'react';
import { siteName } from '../global-config';

import './Menu.scss';

function priceFormatter(price) {
  return typeof price === 'object' ? (
    Object.entries(price).map((p, i) => (
      <span className="mr-2" key={i}>
        <span className="mr-1 small text-muted">{p[0]}:</span>
        <span>${p[1]}</span>
      </span>
    ))
  ) : (
    <span className="mr-2">${price}</span>
  );
}

class Menu extends Component {
  state = {
    displayMenu: this.props.initialMenu,
    filter: 'eggs'
  };

  onFilterClick = e => {
    e.preventDefault();
    const { filter } = e.target.dataset;
    this.setState({
      filter
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <React.Fragment>
        <h2 className="text-center" style={{ margin: '3rem 0' }}>
          {siteName} Menu
        </h2>
        <div className="menu">
          <aside className="menu__filters">
            <a href="#" data-filter="eggs" className={filter === 'eggs' ? 'selected' : ''} onClick={this.onFilterClick}>
              Eggs
            </a>
            <a
              href="#"
              data-filter="pasta scrambles"
              className={filter === 'pasta scrambles' ? 'selected' : ''}
              onClick={this.onFilterClick}
            >
              Pasta Scrambles
            </a>

            <a
              href="#"
              data-filter="other good things"
              className={filter === 'other good things' ? 'selected' : ''}
              onClick={this.onFilterClick}
            >
              Other Good Things
            </a>
          </aside>
          <article className="menu__container">
            {filter === 'eggs' && (
              <section className="menu__section">
                <p className="lead menu__heading">
                  <strong>Eggs</strong>
                </p>
                {this.state.displayMenu.eggs.map(m => (
                  <div className="menu__row" key={m.id}>
                    <div className="label">
                      <p className="mb-0 lead">{m.title}</p>
                      {m.description && <p className="description">{m.description}</p>}
                    </div>
                    <div className="price">
                      <span className="mr-2">{priceFormatter(m.price)}</span>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {filter === 'pasta scrambles' && (
              <section className="menu__section">
                <p className="lead menu__heading">
                  <strong>Pasta Scrambles</strong>
                </p>
                {this.state.displayMenu['pasta scrambles'].map(m => (
                  <div className="menu__row" key={m.id}>
                    <div className="label">
                      <p className="mb-0 lead">{m.title}</p>
                      {m.description && <p className="description">{m.description}</p>}
                    </div>
                    <div className="price">
                      <span className="mr-2">{priceFormatter(m.price)}</span>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {filter === 'other good things' && (
              <section className="menu__section">
                <p className="lead menu__heading">
                  <strong>Other Good Things</strong>
                </p>
                {this.state.displayMenu['other good things'].map(m => (
                  <div className="menu__row" key={m.id} data-key={m.id}>
                    <div className="label">
                      <p className="mb-0 lead">{m.title}</p>
                      {m.description && <p className="description">{m.description}</p>}
                    </div>
                    <div className="price">{priceFormatter(m.price)}</div>
                  </div>
                ))}
              </section>
            )}
          </article>
        </div>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {};

export default Menu;
