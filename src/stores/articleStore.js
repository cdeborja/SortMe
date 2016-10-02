var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');
var ArticleStore = new Store(AppDispatcher);
var ArticleActions = require('../actions/articleActions');

var articles = {};

ArticleStore.all = function () {
  
};

ArticleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArticleConstants.LOADARTICLES:
    ArticleStore.__emitChange();
    break;
  }
};

module.exports = ArticleStore;
