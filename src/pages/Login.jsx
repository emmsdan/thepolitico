import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CallToAction from '../components/presentationals/CallToAction/CallToAction';
// import PropTypes from 'prop-types'
import FormCard from '../components/presentationals/Form/FormCard';
import FormInput from '../components/presentationals/Form/FormInput';
// import FormButton from '../components/presentationals/Form/FormButton';
import { generateFormData } from '../utils/form';
import { authenticationRequestHandler } from '../store/reducers/auth';
import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';

class Login extends Component {
  componentDidMount() {
    const { history } = this.props;
    authenticationToken() && history.push('/');
  }

  submitLoginDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    const {
      history,
      location: { state },
    } = this.props;
    let redirectUrl = state ? state.from.pathname : 'account';
    return this.props.authenticationRequestHandler(
      formData,
      'login',
      history,
      redirectUrl,
    );
  };

  render() {
    return (
      <>
        {this.props.auth.isLoading && (
          <Loader loader="show" text="Hi, am processing your input" />
        )}
        <CallToAction withButton={false} />
        <section className="wrapper">
          <FormCard
            header="Sign in to Continue"
            onSubmit={this.submitLoginDetails}
          >
            <FormInput
              name="username"
              id="login_username"
              placeholder="enter email or phone number"
              title="Email or Phone"
            />

            <FormInput
              name="password"
              id="login_password"
              placeholder="enter password"
              title="Password"
              type="password"
            />
            <br />
            <div className="field">
              <button type="submit" className="button-bigger">
                Login
              </button>
            </div>
            <br />
            <a href="forgot-password"> Forgot My Password </a>
            <br />
            <br />
            <a href="register"> Create a new Account </a>
            <br />
            <br />
          </FormCard>
        </section>
      </>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object,
  authenticationRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { authenticationRequestHandler },
)(Login);
