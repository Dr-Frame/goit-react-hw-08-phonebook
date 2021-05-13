import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginView.scss';
import authOperations from '../../redux/auth/auth-operations';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    /* const { name, value } = e.target; */
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <section className="login">
        <p>frame2010@gmail.com</p>
        <p>Frame123456</p>
        <h1 className="login__title">Login form</h1>

        <form
          className="login-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="login-form__wrapper">
            <label className="login-form__label" for="email">
              E-mail
            </label>
            <input
              id="email"
              className="login-form__input"
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="login-form__wrapper">
            <label for="password " className="login-form__label">
              Password
            </label>
            <input
              id="password"
              className="login-form__input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>

          <button className="login-form__btn" type="submit">
            Login
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
