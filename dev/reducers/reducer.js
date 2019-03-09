import { combineReducers } from 'redux';
import articles from './addArticle';
import articleToUpdateId from './articleToUpdate';

const mainReducer = combineReducers({
    articles,
    articleToUpdateId
});

export default mainReducer;