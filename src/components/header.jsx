var React = require('react');

var Header = React.createClass({
  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  render: function () {
    return (
      <div>
        <header className="header-container group">
          <p>Unpublished Articles</p>
          <p>Author</p>
          <p>Words</p>
          <p>Submitted</p>
        </header>
      </div>
    );
  }
});

module.exports = Header;
