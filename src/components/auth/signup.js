import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";

class Signup extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.dispatchSignupUser(this.state)
  }

  render() {
    return (
      <form>
        <h1>Signup</h1>
        <fieldset>
          <label for="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            className=""
            onChange={this.handleChange}
            value={this.state.email}
          />
        </fieldset>
        <fieldset>
          <label for="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            className=""
            onChange={this.handleChange}
            value={this.state.password}
          />
        </fieldset>
        <input type="submit">Sign Up</input>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Signup);