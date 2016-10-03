var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');
var ArticleStore = new Store(AppDispatcher);
var ArticleActions = require('../actions/articleActions');

var articleList = [];
var visibleArticles = [];
var page = 0;

ArticleStore.displayArticles = function() {
  return visibleArticles;
};

ArticleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArticleConstants.INITIAL_ARTICLES_LOADED:
    cacheArticles(payload.articles);
    ArticleStore.__emitChange();
    break;
    case ArticleConstants.LOAD_MORE_ARTICLES:
    page++;
    getTenMoreArticles();
    ArticleStore.__emitChange();
    break;
  }
};

function getTenMoreArticles() {
  var total = articleList.length;
  var start = (page * 10);
  var end = ((page + 1) * 10);
  if (total >= visibleArticles.length) {
    visibleArticles = visibleArticles.concat(articleList.slice(start,end));
  }
}

function cacheArticles(articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}

module.exports = ArticleStore;
