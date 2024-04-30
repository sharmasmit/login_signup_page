import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      agreeTerms: false,
      passwordError: "",
    };
  }

  handlePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, agreeTerms } = this.state;
    if (agreeTerms) {
      if (password.length < 6) {
        this.setState({
          passwordError: "Password must be at least 6 characters long",
        });
      } else {
        console.log("Form submitted!");
      }
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  handlePasswordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
    if (password.length === 0) {
      this.setState({ passwordError: "Password is required" });
    } else if (password.length < 6) {
      this.setState({
        passwordError: "Password must be at least 6 characters long",
      });
    } else {
      this.setState({ passwordError: "" });
    }
  };

  render() {
    const { email, password, showPassword, agreeTerms, passwordError } =
      this.state;

    return (
      <div className="App">
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={this.handlePasswordChange}
              required
            />
            <button type="button" onClick={this.handlePasswordVisibility}>
              {showPassword ? "Hide" : "Show"} Password
            </button>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => this.setState({ agreeTerms: !agreeTerms })}
              />
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" disabled={!agreeTerms}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
