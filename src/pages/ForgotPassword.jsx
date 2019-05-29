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

class ForgotPassowrd extends Component {
  componentDidMount() {
    const { history } = this.props;
    authenticationToken() && history.push('/');
  }

  submitResetPasswordDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    return this.props.authenticationRequestHandler(formData, 'reset', [], '/');
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
            onSubmit={this.submitResetPasswordDetails}
          >
            <FormInput
              name="email"
              id="email"
              placeholder="enter email address"
              title="Email"
            />
            <br />
            <FormButton type="submit" text="Login" />
          </FormCard>
        </section>
      </>
    );
  }
}

ForgotPassowrd.propTypes = {
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
)(ForgotPassowrd);
