import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import mainReducer from './reducers/reducer.js';
import { fetchAllArticles } from './actions/actionCreators';

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch( fetchAllArticles() );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);