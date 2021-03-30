import React, { Component } from 'react';
import { QnAGallery } from './QnA/QnAGallery';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <QnAGallery/>
    );
  }
}
