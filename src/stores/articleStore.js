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
var lastSortedBy = localStorage.getItem('lastSortedBy') || 'none';
var orderBy = localStorage.getItem('orderBy') || 'up';

ArticleStore.displayArticles = function () {
  if (sorted) {
    return visibleArticles;
  }
  var sortBy;
  sorted = true;
  if (lastSortedBy === 'count') {
    sortBy = 'words';
  } else if (lastSortedBy === 'date') {
    sortBy = 'publish_at';
  } else if (lastSortedBy === 'author') {
    sortBy = 'profile';
  } else if (lastSortedBy === 'default') {
    sortBy = 'id';
  }
  // need to differentiate between desc and asc
  sortBy = orderBy === 'up' ? '-'.concat(sortBy) : sortBy;
  return ApiUtil.sortArticles(visibleArticles, sortBy);
};

ArticleStore.getCurrentTotal = function () {
  return visibleArticles.length;
};

ArticleStore.sortedBy = function () {
  return lastSortedBy;
};

ArticleStore.orderedBy = function () {
  return orderBy;
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
      if (lastSortedBy !== 'count') {
        lastSortedBy = 'count';
        orderBy = 'down';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.DATE_SORTED:
      sorted = false;
      if (lastSortedBy !== 'date') {
        lastSortedBy = 'date';
        orderBy = 'down';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.AUTHOR_SORTED:
      sorted = false;
      if (lastSortedBy !== 'author') {
        lastSortedBy = 'author';
        orderBy = 'down';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.DEFAULT_SORTED:
      sorted = false;
      if (lastSortedBy !== "default") {
        lastSortedBy = 'default';
        orderBy = 'up';
      }
      ArticleStore.__emitChange();
      break;
  }
  // sets up initial conditions for sorting
  localStorage.setItem('lastSortedBy', lastSortedBy);
  localStorage.setItem('orderBy', orderBy);
};

function getTenMoreArticles () {
  sorted = false;
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

function toggleOrder () {
  orderBy = orderBy === 'up' ? 'down' : 'up';
}

function cacheArticles (articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}

module.exports = ArticleStore;
