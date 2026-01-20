import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Part 1
      fname: "",
      lname: "",
      phone: "",

      // Part 2
      gender: "",
      city: "",
      branch: [], // 👈 array for checkboxes

      // Part 3
      color: "",
      dob: "",
      aboutyou: "",

      index: 0,
    };
  }

  next = () => {
    this.setState({ index: this.state.index + 1 });
  };

  previous = () => {
    this.setState({ index: this.state.index - 1 });
  };

  handleBranchChange = (e) => {
    const { value, checked } = e.target;

    this.setState((prevState) => ({
      branch: checked
        ? [...prevState.branch, value]
        : prevState.branch.filter((b) => b !== value),
    }));
  };

  render() {
    const {
      fname,
      lname,
      phone,
      gender,
      city,
      branch,
      color,
      dob,
      aboutyou,
      index,
    } = this.state;

    return (
      <div style={{ padding: "20px", maxWidth: "400px" }}>

        {/* PART 1 */}
        {index === 0 && (
          <div>
            <h2>Part 1 : Basic Info</h2>

            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            <br />

            <input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
            <br />

            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
        )}

        {/* PART 2 */}
        {index === 1 && (
          <div>
            <h2>Part 2 : Personal Details</h2>

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => this.setState({ gender: e.target.value })}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => this.setState({ gender: e.target.value })}
              /> Female
            </label>

            <br />

            <select onChange={(e) => this.setState({ city: e.target.value })}>
              <option value="">Select City</option>
              <option value="Jamnagar">Jamnagar</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
            </select>

            <br /><br />

            <strong>Branch:</strong><br />

            {["B.Tech", "BCA", "MCA", "BBA", "MBA"].map((b) => (
              <label key={b}>
                <input
                  type="checkbox"
                  value={b}
                  onChange={this.handleBranchChange}
                /> {b}
              </label>
            ))}
          </div>
        )}

        {/* PART 3 */}
        {index === 2 && (
          <div>
            <h2>Part 3 : Extra Info</h2>

            <input
              type="color"
              onChange={(e) => this.setState({ color: e.target.value })}
            />
            <br />

            <input
              type="date"
              onChange={(e) => this.setState({ dob: e.target.value })}
            />
            <br />

            <textarea
              placeholder="About You"
              onChange={(e) => this.setState({ aboutyou: e.target.value })}
            />
          </div>
        )}

        <br />

        <button disabled={index === 0} onClick={this.previous}>
          Previous
        </button>

        <button disabled={index === 2} onClick={this.next}>
          Next
        </button>

        <hr />

        <h3>Live Preview</h3>
        <p><b>Name:</b> {fname} {lname}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>City:</b> {city}</p>
        <p><b>Branch:</b> {branch.join(", ")}</p>
        <p><b>DOB:</b> {dob}</p>
        <p><b>Color:</b> {color}</p>
        <p><b>About:</b> {aboutyou}</p>

      </div>
    );
  }
}

export default MultiPart;
