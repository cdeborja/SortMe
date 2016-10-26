### Coding Challenge
This was a coding challenge given to me by one of the companies I had applied for. The time limit was a week. I was tasked with replicating the image they had sent with the necessary functionality of being able to sort the articles and then have the chosen sorting persist when returning back to the page.

In addition to the above, my favorite part of this challenge was creating a way to cache the articles upon first loading the page and then making a separate request XMLHttpRequest to load more articles if the user required more after the initial cached articles.

### `cacheArticles` and `getTenMoreArticles`
When the page first loads, `main.jsx` has a `componentDidMount` that makes a request for the initial 30 articles.

```javascript
componentDidMount: function () {
  this.articleStoreToken = ArticleStore.addListener(this._onChange);
  ApiUtil.loadJSONarticles('./data/articles.json');
}
```

Our `ApiUtil.loadJSONarticles` function is:
```javascript
loadJSONarticles: function(path) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', path, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
    ArticleActions.receiveInitialArticles(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
},
```

Since we've received our initial articles, the dispatcher tells the article store to `cacheArticles`:
```javascript
function cacheArticles (articles) {
  articleList = articleList.concat(articles);
  getTenMoreArticles();
}
```

Where `getTenMoreArticles` adds ten articles to the viewable number of articles. However, if there are no more articles that can be taken from our cached articles, `getTenMoreArticles` will make a new XMLHttpRequest for more articles.
```javascript
function getTenMoreArticles () {
  sorted = false;
  var total = articleList.length;
  var start = (page * 10);
  var end = ((page + 1) * 10);
  if (total === visibleArticles.length) {
    // This will make a new XMLHttpRequest if there needs to be more articles cached
    ApiUtil.loadJSONarticles('./data/more-articles.json');
  } else if (total >= visibleArticles.length) {
    // This adds more articles to the visible articles from our cached articles
    visibleArticles = visibleArticles.concat(articleList.slice(start,end));
    page++;
  }
}
```

Because of the restriction of data with this challenge, there is only a max of 60 articles allowed. So once there are no more articles to be added to our visible articles from our cached articles and we have already made the second XMLHttpRequest, there can be no more articles added so on the page itself will not allow the user to load more articles.

###Set-Up Steps
* 1. `$ git clone https://github.com/cdeborja/SortMe.git`
* 2. Change to folder
* 3. "npm install"
* 4. "npm run start"
* 5. open up to http://localhost:3000/src/index.html
