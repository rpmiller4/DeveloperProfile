import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { SplashPage } from './components/SplashPage';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Route exact path='/' component={SplashPage} />
        <Route path='/splash-page' component={Home} />
        {/*<Layout>*/}
        {/*  <Route path='/counter' component={Counter} />*/}
        {/*  <Route path='/fetch-data' component={FetchData} />*/}
        {/*  <Route path='/questions-and-answers' component={QuestionsAndAnswers} />*/}
        {/*  <Route path='/q-n-a-gallery' component={QnAGallery} />*/}

        {/*</Layout></div>*/}</div>

    );
  }
}
