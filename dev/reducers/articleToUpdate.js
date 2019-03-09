import { ARTICLE_TO_UPDATE } from '../actions/actionCreators';

const articleToUpdateId = (state = null, action)  => {
    switch (action.type) {
        case ARTICLE_TO_UPDATE:
            return action.id;
        default:
            return state;
    }
}

export default articleToUpdateId;