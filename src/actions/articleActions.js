var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var ArticleActions = {
  receiveInitialArticles: function (articles) {
    Dispatcher.dispatch({
      actionType: ArticleConstants.ARTICLES_LOADED,
      articles: articles
    });
  },
  loadMoreArticles: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.LOAD_MORE_ARTICLES
    });
  },
  sortByWordCount: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.COUNT_SORTED
    });
  },
  sortBySubmitted: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.DATE_SORTED
    });
  },
  sortByAuthor: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.AUTHOR_SORTED
    });
  },
  sortByDefault: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.DEFAULT_SORTED
    });
  }
};

module.exports = ArticleActions;
