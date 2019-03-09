import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ArticlesList from '../components/ArticlesList';

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const DisplayArticlesList = connect(mapStateToProps, mapDispatchToProps)(ArticlesList);

export default DisplayArticlesList;