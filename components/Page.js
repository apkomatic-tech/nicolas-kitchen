import React from 'react';
import Meta from './Meta';
import './Page.scss';
import Header from './Header';
import Footer from './Footer';

const Page = props => {
  const { pathname } = props;

  return (
    <section id="nc-site" className="page">
      <Header title={pathname.replace('/', '')} />
      <Meta />
      {props.children}
      <Footer />
    </section>
  );
};

export default Page;
