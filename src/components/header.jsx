var React = require('react');
var ArticleStore = require('../stores/articleStore');

var Header = React.createClass({
  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  render: function () {
    return (
      <div>
        <header className="header-container group">
          <div className="main-row">
            <p>Unpublished Articles ({ArticleStore.getCurrentTotal()})</p>
          </div>
          <div className="sub-row-index">
            <p className="sub-row">
              Author
            </p>
            <p className="sub-row">
              Words
            </p>
            <p className="sub-row">
              Submitted
            </p>
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Header;
