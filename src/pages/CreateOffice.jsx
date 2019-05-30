import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types'
import FormCard from '../components/presentationals/Form/FormCard';
import FormInput from '../components/presentationals/Form/FormInput';
import FormButton from '../components/presentationals/Form/FormButton';
import { generateFormData } from '../utils/form';
import { createOfficeRequestHandler } from '../store/reducers/office';
import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';

class CreateOffice extends Component {
  componentDidMount() {
    const { history } = this.props;
    !authenticationToken() && history.push('/');
  }

  submitCreateOfficeDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    return this.props.createOfficeRequestHandler(formData, this.props.history);
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
            header="Create a new Political Office"
            onSubmit={this.submitCreateOfficeDetails}
          >
            <FormInput
              name="name"
              id="officeName"
              placeholder="enter the name of the office position"
              title="Office Position"
            />

            <FormInput
              name="type"
              id="officeType"
              placeholder="enter the type of office, eg. House of Rep."
              title="Office Type"
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

CreateOffice.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  createOfficeRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { createOfficeRequestHandler },
)(CreateOffice);
