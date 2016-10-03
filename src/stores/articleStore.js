var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');
var ArticleStore = new Store(AppDispatcher);
var ArticleActions = require('../actions/articleActions');

var ApiUtil = require('../util/apiUtil');

var articleList = [];
var visibleArticles = [];
var page = 0;

ArticleStore.displayArticles = function() {
  return visibleArticles;
};

ArticleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArticleConstants.ARTICLES_LOADED:
    cacheArticles(payload.articles);
    ArticleStore.__emitChange();
    break;
    case ArticleConstants.LOAD_MORE_ARTICLES:
    getTenMoreArticles();
    ArticleStore.__emitChange();
    break;
  }
};

function getTenMoreArticles() {
  var total = articleList.length;
  var start = (page * 10);
  var end = ((page + 1) * 10);
  if (total === visibleArticles.length) {
    ApiUtil.loadJSONarticles('./data/more-articles.json');
  } else if (total >= visibleArticles.length) {
    visibleArticles = visibleArticles.concat(articleList.slice(start,end));
    page++;
  }
}

function cacheArticles(articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}

module.exports = ArticleStore;
