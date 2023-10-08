import React from "react";

class FormData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      studentArray: [],
      
    };
  }
  handleSubmit = () => {
    if ( this.state.name.length > 0 && this.state.department.length > 0 && this.state.rating > 0 && this.state.rating <= 5
    ) {
      const temporaryobject = {
        name: this.state.name,
        department: this.state.department,
        rating: this.state.rating,
      };

      this.setState((Roony) => ({
        studentArray: [...Roony.studentArray, temporaryobject],
      }));

      this.setState({
        name: "",
        department: "",
        rating: "",
      });
    } else {
      alert("Enter Vaid Details")
    }
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <>
        <div className="container">
          <h2 className="top">Employer's Feedback Form</h2>
          <form>

            <label  className="formelements">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your Name" value={this.state.name} onChange={this.handleInput} />

            <label  className="formelements">Department:</label>
            <input type="text" id="department" name="department" placeholder="Enter Department" value={this.state.department} onChange={this.handleInput} />

            <label  className="formelements">Rating:</label>
            <input type="number" id="rating" name="rating" placeholder="Give Rating" value={this.state.rating} onChange={this.handleInput} />

            <button className="submit" type="button" onClick={this.handleSubmit}>Submit </button>
          </form>
        </div>

        <div className="StudentData">
          {this.state.studentArray.map((item, index) => {
            return (
              <div className="dataholder" key={index}>
                <h1>
                  {item.name} \\ {item.department} \\ {item.rating}
                </h1>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default FormData;