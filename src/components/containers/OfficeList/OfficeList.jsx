import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getOfficeRequestHandler } from '../../../store/reducers/office';
import Loader from '../../presentationals/Loader/Loader';
import { Link } from 'react-router-dom';

class OfficeList extends Component {
  componentDidMount() {
    this.props.getOfficeRequestHandler('', 'offices');
  }

  render() {
    const offices = this.props.offices.offices.map((office, key) => {
      return (
        <div
          style={{
            background: '#fff',
            padding: '10px',
            width: '300px',
            margin: '10px',
            textAlign: 'center',
            boxShadow: '0px 2px 12px #000',
          }}
          key={key}
        >
          <h2> {office.type} </h2>
          <div className="offices_office" style={{ height: 'auto' }}>
            <h3>
              <Link to={`/office/${office.id}/candidate`}> {office.name} </Link>
            </h3>
            <div className="offices_office_options">
              <Link to={`/office/${office.id}/candidate`}>
                <span style={{ color: '#fff' }}>view candidate</span>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        {this.props.offices.isLoading && (
          <Loader loader="show" text="Hi, am processing your input" />
        )}
        <div className="offices">
          <br /> <br />
          {offices}
        </div>
      </>
    );
  }
}

OfficeList.propTypes = {
  getOfficeRequestHandler: PropTypes.func.isRequired,
  offices: PropTypes.object,
  match: PropTypes.object,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return { offices: state.offices };
};

export default connect(
  mapStateToProps,
  { getOfficeRequestHandler },
)(OfficeList);
