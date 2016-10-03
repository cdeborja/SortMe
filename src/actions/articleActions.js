var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var ArticleActions = {
  receiveInitialArticles: function (articles) {
    Dispatcher.dispatch({
      actionType: ArticleConstants.INITIAL_ARTICLES_LOADED,
      articles: articles
    });
  }
};

module.exports = ArticleActions;
