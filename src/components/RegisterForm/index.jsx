import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      firstName: "",
      lastName: "",
      age: 0,
      regLogin: "",
      regPassword: "",
      remember: false,
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const {
      target: { type, checked, value, name },
    } = event;

    const calcValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: calcValue,
    });
  };

  handleReset = () => {
    this.setState(this.initialState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /* 
        operations with incoming data
    */
    this.handleReset();
  };

  render() {
    return (
      <form onReset={this.handleReset} onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="second name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="age">
            <input
              type="number"
              name="age"
              id="age"
              placeholder="your age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="regLogin">
            <input
              type="login"
              name="regLogin"
              id="regLogin"
              placeholder="login"
              value={this.state.regLogin}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="regPass">
            <input
              type="password"
              name="regPassword"
              id="regPass"
              placeholder="password"
              value={this.state.regPassword}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" />
            Agree with our <a href="#">rules</a> and{" "}
            <a href="#">confidetial politics</a>
          </label>
        </div>
        <div>
          <label>
            <input
              type="submit"
              value="submit"
              checked={this.state.remember}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <input type="reset" value="reset" onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default RegisterForm;
