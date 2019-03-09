import React, { Component } from 'react';

class UpdateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articleToUpdateId) {
            this.setState(nextProps.article);
        } else {
            this.setState({
                id: null,
                title: '',
                description: ''
            });
        }
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
                [name]: target.value
            });
    }

  render() {
      const isEnabled =
          this.state.title.length > 0 &&
          this.state.description.length > 0;

    return(
        this.props.articleToUpdateId &&
      <form>
        <h3>Update Article</h3>
        <div className="form-group">
          <label for="textTitle">Title</label>
          <input value={this.state.title}
                 onChange={this.handleChange}
                 name="title"
                 type="text"
                 className="form-control"/>
          <label for="textDescription">Description</label>
          <textarea value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                    className="form-control"
                    rows="10">
          </textarea>
        </div>
        <a onClick={() => {
                        isEnabled &&
                        this.props.updateArticle({
                            title: this.state.title,
                            description: this.state.description,
                            likes: this.state.likes,
                            dateAdded: this.state.dateAdded,
                            id: this.props.article.id
                            }).then(() => {this.props.articleToUpdate(null);});
                   }}
           disabled={!isEnabled}
           className="btn btn-success">
            Save
        </a>
        <a onClick={() => {this.props.articleToUpdate(null)}}
           className="btn btn-warning">
            Cancel
        </a>
      </form>
    );
  }
}

export default UpdateArticle;