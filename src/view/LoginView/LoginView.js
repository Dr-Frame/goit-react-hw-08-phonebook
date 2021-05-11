import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginView';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  error: {
    color: 'red',
  },
};

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
    const { onErrorToShow } = this.props;
    const { email, password } = this.state;

    return (
      <section>
        <h1>Login form</h1>
        {onErrorToShow && (
          <p style={styles.error}>
            User email or password is incorrect, please try again
          </p>
        )}
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  onErrorToShow: authSelectors.getIsErrorOccured(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
