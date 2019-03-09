import fetch from 'isomorphic-fetch';

class ArticlesApi {
    static getAllArticles() {
        return fetch(`http://localhost:3000/articles`).then(response => {
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static postArticle(article) {
        return fetch(`http://localhost:3000/articles`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            });
    }

    static updateArticle(article) {
        return fetch(`http://localhost:3000/articles/${article.id}`, {
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(article)
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            });
    }

    static deleteArticle(id) {
        return fetch(`http://localhost:3000/articles/${id}`, {
            method: "DELETE"
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            });
    }

    static likeArticle(article) {
        let likedArticle = Object.assign({}, article, article.likes++);
        return fetch(`http://localhost:3000/articles/${article.id}`, {
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(likedArticle)
        }).then(response => response.json(),
                error => console.log('An error occured.', error)
        ).then(json => {
                return json;
            });
    }
}

export default ArticlesApi;