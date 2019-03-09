import React, { Component } from 'react';
import Article from './Article';

class ArticlesList extends Component {
    render(){
        return(
            <div>
                {
                    this.props.articles.map((article) =>
                      <Article article={article}
                               deleteArticle={this.props.deleteArticle}
                               articleToUpdate={this.props.articleToUpdate}
                               likeArticle={this.props.likeArticle}
                               key={article.id}
                      />)
                }
            </div>
        );
    }
}

export default ArticlesList;