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

class ConfirmPassword extends Component {
  componentDidMount() {
    const { history } = this.props;
    authenticationToken() && history.push('/');
  }

  submitResetPasswordDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    return this.props.userLoginHandler(formData, [], '/');
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
            header="Confirm Password Change"
            onSubmit={this.submitResetPasswordDetails}
          >
            <FormInput
              name="password1"
              id="password1"
              placeholder="enter password"
              title="Password"
            />
            <FormInput
              name="password2"
              id="password2"
              placeholder="enter password again"
              title="Confirm Password"
            />
            <br />
            <FormButton type="submit" text="Change My Password" />
          </FormCard>
        </section>
      </>
    );
  }
}

ConfirmPassword.propTypes = {
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
)(ConfirmPassword);
