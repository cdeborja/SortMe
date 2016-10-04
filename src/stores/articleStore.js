var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');
var ArticleStore = new Store(AppDispatcher);
var ArticleActions = require('../actions/articleActions');

var ApiUtil = require('../util/apiUtil');

var articleList = [];
var visibleArticles = [];
var page = 0;
var sorted = false;
var lastSortedBy = window.sessionStorage.getItem('lastSortedBy') || 'none';
var orderBy = window.sessionStorage.getItem('orderBy') || 'up';

ArticleStore.displayArticles = function () {
  if (sorted) {
    return visibleArticles;
  }

  var sortBy;
  sorted = true;

  return ApiUtil.sortArticles(visibleArticles);
};

ArticleStore.getCurrentTotal = function () {
  return visibleArticles.length;
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
    case ArticleConstants.COUNT_SORTED:
      sorted = false;
      sortByWordCount();
      ArticleStore.__emitChange();
      break;
  }
  // sets up initial conditions for sorting
  window.sessionStorage.setItem('lastSortedBy', lastSortedBy);
  window.sessionStorage.setItem('orderBy', orderBy);
};

function getTenMoreArticles () {
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

function cacheArticles (articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}

module.exports = ArticleStore;
