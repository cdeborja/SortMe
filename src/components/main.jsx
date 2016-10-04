var React = require('react');
var ArticleStore = require('../stores/articleStore');
var ArticleActions = require('../actions/articleActions');
var ApiUtil = require('../util/apiUtil');

var Header = require('./header');
var RowContainer = require('./row_container');
var Footer = require('./footer');

var Main = React.createClass({

  getInitialState: function () {
    return (this.getStateFromStore());
  },

  getStateFromStore: function () {
    return ({
      articles: ArticleStore.displayArticles()
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
    if (this.state.articles.length === 0) { return (<div>LOADING ARTICLES...</div>);}
    var articles = this.state.articles.map( function (article) {
      return (<RowContainer article={article} key={article.id} />
      );
    });
    return (
      <div className="main-container">
        <Header />
        {articles}
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
