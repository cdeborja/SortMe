var React = require('react');
var Moment = require('moment');
// use Moment library to parse the time properly

var Row = React.createClass({
  render: function () {
    var timeAgo = Moment(this.props.published,"YYYY-MM-DD hh:mm:ss").fromNow();
    return(
      <div className="row-container group">
        <div className="main-row">
          <img src={this.props.img} alt={this.props.img} className="icon" />
          <a href={this.props.url} className="article-title">
            {this.props.title}
          </a>
        </div>
        <div className="sub-row-index">
          <div className="sub-row aut-color group">
            {this.props.author}
          </div>
          <div className="sub-row">
            {this.props.wordCount}
          </div>
          <div className="sub-row">
            {timeAgo}
          </div>
        </div>
      </div>);
  }
});

module.exports = Row;
