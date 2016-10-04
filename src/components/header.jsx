var React = require('react');
var ArticleStore = require('../stores/articleStore');
var ArticleActions = require('../actions/articleActions');

var Header = React.createClass({
  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  render: function () {
    return (
      <div>
        <header className="header-container group">
          <div className="main-row col">
            <p>Unpublished Articles ({ArticleStore.getCurrentTotal()})</p>
          </div>
          <div className="sub-row-index">
            <p className="sub-row">
              Author
            </p>
            <p className="sub-row" onClick={ArticleActions.sortByWordCount}>
              Words
            </p>
            <p className="sub-row" onClick={ArticleActions.sortBySubmitted}>
              Submitted
            </p>
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Header;
