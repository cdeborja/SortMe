var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var ArticleActions = {
  receiveInitialArticles: function (articles) {
    Dispatcher.dispatch({
      actionType: ArticleConstants.INITIAL_ARTICLES_LOADED,
      articles: articles
    });
  },
  loadMoreArticles: function () {
    Dispatcher.dispatch({
      actionType: ArticleConstants.LOAD_MORE_ARTICLES
    });
  }
};

module.exports = ArticleActions;
