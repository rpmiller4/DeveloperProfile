import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { QuestionsAndAnswers } from './components/QnA/QuestionsAndAnswers';
import { QnAGallery } from './components/QnA/QnAGallery';
import { SplashPage } from './components/SplashPage';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/questions-and-answers' component={QuestionsAndAnswers} />
        <Route path='/q-n-a-gallery' component={QnAGallery} />
        <Route path='/splash-page' component={SplashPage} />
      </Layout>
    );
  }
}
