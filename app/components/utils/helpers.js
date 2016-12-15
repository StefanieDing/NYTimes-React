var axios = require("axios");

//NYT API
var nytAPI = "";

var helper = {
  runQuery: function(topic, startYear, endYear) {
    var queryURL = "";
  }
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
