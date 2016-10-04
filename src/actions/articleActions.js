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
  }
};

module.exports = ArticleActions;
