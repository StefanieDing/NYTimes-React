var axios = require("axios");

//NYT API
var nytAPI = "";

var helper = {
  runQuery: function(topic, startYear, endYear, callback) {
    axios({
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      qs: {
        'api-key': '7ca69eff4bd346239efe73cfddb6ac75',
        'q': topic,
        'begin_date': startYear + '0101',
        'end_date': endYear + '1231'
      },

    });
  },
  getSaved: function(){
    return axios.get('/api/saved');
  },

  postSaved: function(){
    return axios.post('/api/saved');
  },

  deleteSaved: function(){
     return axios.delete('/api/saved'); 
  }
};

module.exports = helper;
