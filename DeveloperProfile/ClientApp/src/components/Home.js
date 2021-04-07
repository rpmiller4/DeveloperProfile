import React, { Component } from 'react';
import { Layout } from "./Layout";
import { Route } from 'react-router';
import { FetchData } from './FetchData';
import { QuestionsAndAnswers } from './QnA/QuestionsAndAnswers';
import { QnAGallery } from './QnA/QnAGallery';
import '../custom.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Layout> 

        <Route path='/fetch-data' component={FetchData} /> 
        <Route path='/questions-and-answers' component={QuestionsAndAnswers} /> 
        <Route path='/q-n-a-gallery' component={QnAGallery} /> 
      </Layout>
    );
  }
}
