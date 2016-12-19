// Include React
var React = require("react");

// Creating the Saved component
var Saved = React.createClass({

  //Render the function
  render: function() {
    return (
      <div className="panel card center-align">
        <h3 className="panelTitle">Saved</h3>
        
        <div className="savedBox">
          <h5 className="left-align">{this.props.saved}</h5>
          <button className="waves-effect waves-light btn right-align">Remove</button>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;