import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      married: false,
      gender: "",
      favColor: "",
      govDoc: {
        aadhar: false,
        passport: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (name === "aadhar" || name === "passport") {
        this.setState((prevState) => {
          const ns = prevState;
          ns.govDoc[name] = checked;
          return ns;
        });
      } else {
        this.setState({
          [name]: checked,
        });
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          placeholder="first name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          placeholder="last name"
          onChange={this.handleChange}
        />
        <br />
        <label>Married</label>
        <input
          type="checkbox"
          name="married"
          value={this.state.married}
          onChange={this.handleChange}
        />
        <br />
        <label>gender</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        />
        <label>Female</label>

        <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        />
        <label>Male</label>

        <br />
        <label>fav color</label>
        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="aadhar"
            checked={this.state.govDoc.aadhar}
            onChange={this.handleChange}
          />
          Aadhar
          <input
            type="checkbox"
            name="passport"
            checked={this.state.govDoc.passport}
            onChange={this.handleChange}
          />
          Passport
        </label>
        <h1>
          {this.state.firstname} {this.state.lastname} {this.state.married}
          {this.state.gender} {this.state.favColor} {this.state.govDoc.aadhar}
          {this.state.govDoc.passport}
        </h1>
      </form>
    );
  }
}

export default App;
