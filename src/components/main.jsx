var React = require('react');
var ArticleStore = require('../stores/articleStore');
var ApiUtil = require('../util/apiUtil');

var Main = React.createClass({

  getInitialState: function () {
    return (this.getStateFromStore());
  },

  getStateFromStore: function () {
    return ({
      articles: ArticleStore.all()
    });
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    this.articleStoreToken = ArticleStore.addListener(this._onChange);
    ApiUtil.loadJSONarticles('./data/articles.json');
  },

  componentWillUnmount: function () {
    this.articleStoreToken.remove();
  },

  render: function () {
    return (
      <div>
        Got to main.js
      </div>
    );
  }
});

module.exports = Main;
