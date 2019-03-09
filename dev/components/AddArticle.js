import React, { Component } from 'react';

class AddArticle extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };

        this.saveButton = this.saveButton.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value });
    };

    saveButton() {
        this.props.addArticle
        ({
            title: this.state.title,
            description: this.state.description,
            likes: 0,
            dateAdded: new Date().getTime()
        });
        this.setState({title: ''});
        this.setState({description: ''});
    }

    render() {
        const isEnabled =
            this.state.title.length > 0 &&
            this.state.description.length > 0;

        return(
            <form>
              <h3>Add Article</h3>
              <div className="form-group">
                <label for="textTitle">Title</label>
                <input type="text"
                       className="form-control"
                       value={this.state.title}
                       onChange={this.handleTitleChange}
                />
                <label for="textDescription">Description</label>
                <textarea className="form-control"
                          rows="10"
                          value={this.state.description}
                          onChange={this.handleDescriptionChange}>
                </textarea>
              </div>
              <a onClick={isEnabled && this.saveButton}
                 className="btn btn-success"
                 disabled={!isEnabled}>Save
              </a>
            </form>
        );
    }
}

export default AddArticle;