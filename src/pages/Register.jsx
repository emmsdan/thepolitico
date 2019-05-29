import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CallToAction from '../components/presentationals/CallToAction/CallToAction';
// import PropTypes from 'prop-types'
import FormCard from '../components/presentationals/Form/FormCard';
import FormInput from '../components/presentationals/Form/FormInput';
import FormButton from '../components/presentationals/Form/FormButton';
import { generateFormData } from '../utils/form';
import { authenticationRequestHandler } from '../store/reducers/auth';
import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';
import { Link } from 'react-router-dom';

class Register extends Component {
  componentDidMount() {
    const { history } = this.props;
    authenticationToken() && history.push('/');
  }

  submitRegisterDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    const {
      history,
      location: { state },
    } = this.props;
    let redirectUrl = state ? state.from.pathname : 'account';
    return this.props.authenticationRequestHandler(
      formData,
      'signup',
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
            header="Create a New Account"
            onSubmit={this.submitRegisterDetails}
          >
            <FormInput
              name="firstName"
              id="firstName"
              placeholder="enter first name"
              title="First Name"
            />
            <FormInput
              name="lastName"
              id="lastName"
              placeholder="enter last name"
              title="last Name"
            />
            <FormInput
              name="email"
              id="email"
              placeholder="enter email address: ecomje@gmail.com"
              title="Email"
              type="email"
            />
            <FormInput
              name="phoneNumber"
              id="phoneNumber"
              placeholder="enter phone number"
              title="Phone Number"
            />

            <FormInput
              name="password"
              id="password"
              placeholder="enter password"
              title="Password"
              type="password"
            />
            <div className="field">
              <span className="error red-text" htmlFor="role" />
              <select type="text" name="role" id="role" required>
                <option value="user"> Voter</option>
                <option value="politician"> Politician</option>
              </select>
              <label htmlFor="role">Select User Type:</label>
            </div>
            <br />
            <FormButton type="submit" text="Register me" />
            <br />
            <Link to="login"> login to my account </Link>
            <br />
          </FormCard>
        </section>
      </>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
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
)(Register);
