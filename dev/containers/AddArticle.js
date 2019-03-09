import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import AddArticle from '../components/AddArticle';

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const AddNewArticle = connect(mapStateToProps, mapDispatchToProps)(AddArticle);

export default AddNewArticle;