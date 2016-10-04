var React = require('react');
var ArticleActions = require('../actions/articleActions');
var ArticleStore = require('../stores/articleStore');

var Footer = React.createClass({

  loadMoreArticles: function () {
    ArticleActions.loadMoreArticles();
  },

  displayButton: function () {
    if (ArticleStore.getCurrentTotal() === 60) {
      return (<div className="no-more">No more articles</div>);
    } else {
      return (<div className="load-button" onClick={this.loadMoreArticles}>Load More</div>);
    }
  },

  render: function () {

    return(
      <div>
        {this.displayButton()}
      </div>
    );
  }
});

module.exports = Footer;
