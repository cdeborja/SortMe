var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');
var ArticleStore = new Store(AppDispatcher);
var ArticleActions = require('../actions/articleActions');

var articleList = [];
var visibleArticles = [];

ArticleStore.displayArticles = function() {
  return visibleArticles;
};

ArticleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArticleConstants.INITIAL_ARTICLES_LOADED:
    cacheArticles(payload.articles);
    ArticleStore.__emitChange();
    break;
  }
};

function getTenMoreArticles() {
  if (articleList.length >= visibleArticles.length) {
    visibleArticles = visibleArticles.concat(articleList.slice(0,10));
  }
}

function cacheArticles(articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}

module.exports = ArticleStore;
