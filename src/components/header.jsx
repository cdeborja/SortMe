var React = require('react');
var ArticleStore = require('../stores/articleStore');
var ArticleActions = require('../actions/articleActions');

var Header = React.createClass({

  getInitialState: function () {
    return ({
      sortBy: ArticleStore.sortedBy(),
      orderBy: ArticleStore.orderedBy()
    });
  },

  getStateFromStore: function () {
    this.setState({
      sortBy: ArticleStore.sortedBy(),
      orderBy: ArticleStore.orderedBy()
      });
  },

  componentDidMount: function () {
    this.articleStoreToken = ArticleStore.addListener(this.getStateFromStore);
  },

  componentWillUnmount: function () {
    this.articleStoreToken.remove();
  },

  render: function () {

    var countArrow = "";
    var dateArrow = "";
    var authorArrow = "";

    if (this.state.sortBy === "count") {
      if (this.state.orderBy === "up") {
        countArrow="arrow-up";
      } else {
        countArrow="arrow-down";
      }
    } else if (this.state.sortBy === "date") {
      if (this.state.orderBy === "up") {
        dateArrow="arrow-up";
      } else {
        dateArrow="arrow-down";
      }
    } else if (this.state.sortBy === "author") {
      if (this.state.orderBy === "up") {
        authorArrow="arrow-up";
      } else {
        authorArrow="arrow-down";
      }
    }

    return (
      <div>
        <header className="header-container group">
          <div className="main-row col">
            <p>Unpublished Articles ({ArticleStore.getCurrentTotal()})</p>
          </div>
          <div className="sub-row-index">
            <div className="sub-row col" onClick={ArticleActions.sortByAuthor}>
              Author
              <div className={authorArrow}>
              </div>
            </div>
            <div className="sub-row col" onClick={ArticleActions.sortByWordCount}>
              Words
              <div className={countArrow}>
              </div>
            </div>
            <div className="sub-row col" onClick={ArticleActions.sortBySubmitted}>
              Submitted
              <div className={dateArrow}>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Header;
