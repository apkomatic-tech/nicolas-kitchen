import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class NcApp extends App {
  render() {
    const { Component, router } = this.props;

    return (
      <Container>
        <Page {...router}>
          <Component />
        </Page>
      </Container>
    );
  }
}
