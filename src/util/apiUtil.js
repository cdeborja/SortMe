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

  sortArticles: function(articles) {
    articles.sort(dataSort());
    return articles;
  }
};

function dataSort () {
  var sortOrder = 1;
  var property = "words";
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
