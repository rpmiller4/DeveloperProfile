import React, { Component } from 'react';
import { SplashPage } from './SplashPage';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <SplashPage/>
    );
  }
}
