var ArticleActions = require('../actions/articleActions');

var ApiUtil = {

  loadJSONarticles: function(path) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', path, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
    ArticleActions.receiveInitialArticles(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
  },

  sortArticles: function(articles, sortBy) {
    articles.sort(dataSort(sortBy));
    return articles;
  }
};

function dataSort (sortBy) {
  var sortOrder = 1;
  var property = sortBy;

  if (sortBy[0] === '-') {
    sortOrder = -1;
    property = sortBy.slice(1);
  }
  return function compare(a, b) {
    var result = 0;
    if (a[property] < b[property]) {
      result = -1;
    } else if (a[property] > b[property]) {
      result = 1;
    }
    return result * sortOrder;
  };
}

module.exports = ApiUtil;
