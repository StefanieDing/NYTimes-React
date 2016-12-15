// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({

  //Render the function
  render: function() {
    return (
      <div className="panel card center-align">
        <h3 className="panelTitle">Results</h3>
        
        <div className="resultBox card">
          <h5 className="left-align">{this.props.results}<h5>
          <button className="waves-effect waves-light btn right-align">Save</button>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;