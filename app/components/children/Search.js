// Include React
var React = require("react");

// Creating the Search component
var Search = React.createClass({

  getInitialState: function() {
     return { topic: "", startYear: "", endYear: "" };
  },
  //this function will respond to user input
  handleChange: function(event) {

  },
  //function after user submits
  handleSubmit: function(event) {
    event.preventDefault();

    //sends the parent the search parameters
  },
  // Render the function
  render: function() {
    return (
      <div className="card center-align">
        <h3 className="panelTitle">Search</h3>

        <form className="card-panel" onSubmit={this.handleSubmit}>
         
          <div className="input-field">
            <input type="text" placeholder="Topic (required)" id="topic" onChange={this.handleChange} className="validate" required></input>
          </div>
       
          <div className="input-field">
            <input type="number" maxlength="4" placeholder="Start Year (required)" id="startYear" onChange={this.handleChange} className="validate" required></input>
          </div>

          <div className="input-field">
            <input type="number" maxlength="4" placeholder="End Year (required)" id="endYear" onChange={this.handleChange} className="validate" required></input>
          </div>
       
          <br></br>
          <button className="waves-effect waves-light btn" type="submit">Submit</button>
        </form>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;