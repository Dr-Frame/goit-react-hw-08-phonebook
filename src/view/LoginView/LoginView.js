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
          <label className="login-form__label">
            E-mail
            <input
              className="login-form__input"
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="login-form__label">
            Password
            <input
              className="login-form__input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>

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
