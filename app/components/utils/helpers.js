var axios = require("axios");

//NYT API key
var nytAPI= "7ca69eff4bd346239efe73cfddb6ac75";

var helper = {
  runQuery: function(query) {
    console.log(query);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q="+ "&begin_date=" + query.startYear + "0101" + "&begin_date=" + query.endYear + "0231";
    return axios.get(queryURL).then(function(response) {
      var results = [];
      // If get a result, return that result's formatted address property
      if (response.data.results[0]) {
        for(var i = 0; i<5; i++){
          results.push(response.data.results[i].formatted);
        }
        return results;
      } else{
        // If we don't get any results, return an empty string
        return "No articles found.";
      }
    });
  },
  getSaved: function(){
    return axios.get('/api/saved');
  },

  postSaved: function(){
    return axios.post('/api/saved', article);
  },

  deleteSaved: function(){
     return axios.delete('/api/saved'); 
  }
};

module.exports = helper;
