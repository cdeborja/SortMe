var React = require('react');
var Row = require('./row');

var RowContainer = React.createClass({
  render: function () {
    var singleArticle = this.props.article;
    if (singleArticle.length === 0) { return (<div></div>);}
    return (
      <Row
      img={singleArticle.image}
      url={singleArticle.url}
      title={singleArticle.title}
      author={singleArticle.profile.first_name + " " + singleArticle.profile.last_name}
      wordCount={singleArticle.words}
      published={singleArticle.publish_at}
      />
    );
  }
});

module.exports = RowContainer;
