var React = require('react');

var Row = React.createClass({
  render: function () {
    return(
      <div className="row-container group">
        <div className="main-row">
          <img src={this.props.img} alt={this.props.img} className="icon" />
          <a href={this.props.url} className="article-title">
            {this.props.title}
          </a>
        </div>
        <div className="sub-row-index">
          <p className="sub-row">
            {this.props.author}
          </p>
          <p className="sub-row">
            {this.props.wordCount}
          </p>
          <p className="sub-row">
            {this.props.published}
          </p>
        </div>
      </div>);
  }
});

module.exports = Row;
