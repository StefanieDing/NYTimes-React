var React = require("react");

//sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

//creating Main Component
var Main = React.createClass({
  getInitialState: function(){
    return { search: [], results: [], saved: []};
  },
  //loads when page is ready
  componentDidMount: function(){

  },
  //any time a component changes, it updates
  componentDidUpdate: function(){

  },
  //lets children update to parent
  setTerm: function(term){
    this.setState({ search: term });
  },
  //Render the function
  render: function(){
    return (
      <div className="container">

        <div className="row">
          <div className="card-panel center-align">
            <h2>New York Times Article Scrubber</h2>
            <h5>Search for and annotate articles of interest!</h5>
          </div>
        </div>

        <div className="row col s12">
          <Search search={this.state.search} />
        </div>

        <div className="row col s12">
          <Results results={this.state.results} />
        </div>
        <div className="row col s12">
          <Saved saved={this.state.saved} />
        </div>

      </div>
    );
  }
});

module.exports = Main;