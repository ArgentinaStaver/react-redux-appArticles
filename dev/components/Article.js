import React, { Component } from 'react';
import UpdateArticle from './UpdateArticle';

class Article extends Component {
    render() {
        const timestamp = new Date(this.props.article.dateAdded).toDateString();

        return(
            <div>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.description}</p>
                <p className="date">{timestamp}</p>
                <span className="buttons-line">
                    <a onClick={() => {
                            this.props.articleToUpdate(this.props.article.id)
                        }}
                       className="btn btn-info">
                            Update
                    </a>
                    <a onClick={() => {
                        this.props.deleteArticle(this.props.article)
                    }} className="btn btn-danger">Delete</a>
                    <span className="text">
                        <i onClick={() => {
                            this.props.likeArticle(this.props.article)
                        }}
                           className="fa fa-thumbs-o-up fa-2x" aria-hidden="true">
                        </i> {this.props.article.likes}
                    </span>
                </span>
                <hr />
            </div>
        );
    }
}

export default Article;