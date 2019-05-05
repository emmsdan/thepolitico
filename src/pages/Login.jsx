import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CallToAction from '../components/presentationals/CallToAction/CallToAction';
// import PropTypes from 'prop-types'
import FormCard from '../components/presentationals/Form/FormCard';
import FormInput from '../components/presentationals/Form/FormInput';
import FormButton from '../components/presentationals/Form/FormButton';
import { generateFormData } from '../utils/form';
import { userLoginHandler } from '../store/reducers/auth';
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
    let redirectUrl = state ? state.from.pathname : 'myaccount';
    return this.props.userLoginHandler(formData, history, redirectUrl);
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
            <FormButton type="submit" text="Login" />
          </FormCard>
        </section>
      </>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  userLoginHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { userLoginHandler },
)(Login);