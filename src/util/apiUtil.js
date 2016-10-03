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
  }
};

module.exports = ApiUtil;
