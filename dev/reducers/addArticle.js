import { ADD_ALL_ARTICLE, ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE, INCREMENT_LIKES } from '../actions/actionCreators';

const articles = (state = [], action)  => {
    switch (action.type) {
        case ADD_ALL_ARTICLE:
            return action.payload;
        case ADD_ARTICLE:
            return [
                action.payload,
                ...state
            ];
        case UPDATE_ARTICLE:
            return state.map(article => {
                if (article.id === action.payload.id) {
                    let x = Object.assign({}, article, action.payload);
                    return x;
                }
                return article;
            });
        case INCREMENT_LIKES:
            return state.map(article => {
                if (article.id === action.id) {
                    article.likes++;
                    return article;
                }
                return article;
            });
        case DELETE_ARTICLE:
            const newState = Object.assign([], state);
            const indexOfArticleToDelete = state.findIndex(article => { return article.id == action.payload.id });
            newState.splice(indexOfArticleToDelete, 1);
            return newState;
        default:
            return state;
    }
}

export default articles;