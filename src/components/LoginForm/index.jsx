import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      login: "",
      password: "",
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
          <label htmlFor="login">
            <input
              type="login"
              name="login"
              id="login"
              placeholder="login"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" />
            Remember me
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

export default LoginForm;
