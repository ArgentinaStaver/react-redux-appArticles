import fetch from 'isomorphic-fetch';
import ArticlesApi from '../api/ArticlesApi';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ALL_ARTICLE = 'ADD_ALL_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const ARTICLE_TO_UPDATE = 'ARTICLE_TO_UPDATE';
export const INCREMENT_LIKES = 'INCREMENT_LIKES';

//add Article
export function addArticle(article) {
    return function (dispatch) {
        return ArticlesApi.postArticle(article).then( response => {
            dispatch({
                type: ADD_ARTICLE,
                payload: response
            });
        });
    }
}

export function fetchAllArticles() {
    return function(dispatch) {
        return ArticlesApi.getAllArticles().then( response => {
            dispatch({
                type: ADD_ALL_ARTICLE,
                payload: response
            });
        }).catch(error => {
            throw(error);
        });
    }
}

export function updateArticle(article) {
    return function(dispatch) {
        return ArticlesApi.updateArticle(article).then( (response) => {
          dispatch({
              type: UPDATE_ARTICLE,
              payload: response
          });
        }).catch(error => {
            throw(error);
        });
    }
}

export function deleteArticle(article) {
    return function(dispatch) {
        return ArticlesApi.deleteArticle(article.id).then( () => {
            dispatch({
                type: DELETE_ARTICLE,
                payload: article
            });
        }).catch(error => {
            throw(error);
        });
    }
}

export function articleToUpdate(id) {
    return {
        type: ARTICLE_TO_UPDATE,
        id
    }
}

export function likeArticle(article) {
    return function(dispatch) {
        return ArticlesApi.likeArticle(article).then( (response) => {
            dispatch({
                type: INCREMENT_LIKES,
                payload: response
            });
        }).catch(error => {
            throw(error);
        });
    }
}