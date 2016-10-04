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

  toggleArrow: function () {
    return this.state.orderBy === "up" ? "arrow-up" : "arrow-down";
  },

  render: function () {

    var countArrow = "";
    var dateArrow = "";
    var authorArrow = "";

    if (this.state.sortBy === "count") {
      countArrow = this.toggleArrow();
    } else if (this.state.sortBy === "date") {
      dateArrow = this.toggleArrow();
    } else if (this.state.sortBy === "author") {
      authorArrow = this.toggleArrow();
    }

    return (
      <div>
        <header className="header-container group">
          <div className="main-row col" onClick={ArticleActions.sortByDefault}>
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
