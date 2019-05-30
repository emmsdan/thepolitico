import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types'
import FormCard from '../components/presentationals/Form/FormCard';
import FormInput from '../components/presentationals/Form/FormInput';
import FormButton from '../components/presentationals/Form/FormButton';
import { generateFormData } from '../utils/form';
import { createPartyRequestHandler } from '../store/reducers/party';
import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';

class CreateParty extends Component {
  componentDidMount() {
    const { history } = this.props;
    !authenticationToken() && history.push('/');
  }

  submitCreatePartyDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    return this.props.createPartyRequestHandler(formData, this.props.history);
  };

  render() {
    return (
      <>
        {this.props.auth.isLoading && (
          <Loader loader="show" text="Hi, am processing your input" />
        )}
        <section className="wrapper">
          <br />
          <br />
          <br />
          <FormCard
            header="Register a new Political Party"
            onSubmit={this.submitCreatePartyDetails}
          >
            <FormInput
              name="name"
              id="party_name"
              placeholder="enter the name of the party"
              title="Party Name"
            />

            <FormInput
              name="hqAddress"
              id="party_hqAddress"
              placeholder="enter the address of the party"
              title="Party Address"
            />
            <input
              name="logoUrl"
              id="logoUrl"
              type="hidden"
              value="https://www.greatplacetowork.com/templates/gptw/images/no-image-available.jpg"
            />

            <br />
            <FormButton type="submit" text="Register this Party" />
            <br />
          </FormCard>
        </section>
      </>
    );
  }
}

CreateParty.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  createPartyRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { createPartyRequestHandler },
)(CreateParty);
