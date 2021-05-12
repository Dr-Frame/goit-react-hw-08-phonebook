import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

import './RegistrationView.scss';

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { isErrorExist } = this.props;
    const { name, email, password } = this.state;

    return (
      <section>
        <div>
          <h1>Registration form</h1>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <label>
              Name
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              E-mail
              <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Register account</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isErrorExist: authSelectors.getApiError(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
