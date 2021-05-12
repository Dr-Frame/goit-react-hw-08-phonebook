import React from 'react';
import './UserNav.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const UserNav = ({ email, onLogout }) => {
  return (
    <div>
      <img
        src="https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg"
        width="30"
        alt="user-logo"
      ></img>
      <p>{email}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

UserNav.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: authSelectors.getUserMail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
