import React, { Component } from 'react';
import { connect } from 'react-redux';
import notifications from '../../components/Notification/Notification';
import authSelectors from '../../redux/auth/auth-selectors';

class HomeView extends Component {
  render() {
    const { onLoginSuccessNotifyShow } = this.props;

    return (
      <div>
        <h1>Welcome to the Phonebook App</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onLoginSuccessNotifyShow: authSelectors.getIsLoginSuccess(state),
});

export default connect(mapStateToProps)(HomeView);
