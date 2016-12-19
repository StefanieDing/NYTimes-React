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
      <div className="panel card center-align">
        <h3 className="panelTitle">Search</h3>

        <form className="card-panel col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field">
              <input type="text" placeholder="Topic" id="topic" onChange={this.handleChange} className="validate" required></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input type="text" placeholder="Start Year" id="startYear" onChange={this.handleChange} className="validate" required></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input type="text" placeholder="End Year" id="endYear" onChange={this.handleChange} className="validate" required></input>
            </div>
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