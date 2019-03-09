import React, { Component } from 'react';
import Header from './components/Header';
import UpdateArticleContainer from './containers/UpdateArticle';
import DisplayArticlesList from './containers/ArticlesList';
import AddNewArticle from './containers/AddArticle';
import { articleToUpdateId } from './reducers/articleToUpdate';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <AddNewArticle />
            <UpdateArticleContainer />
          </div>
          <div className="col-md-8">
            <DisplayArticlesList />
          </div>
        </div>
      </div>
    )
  }
}
