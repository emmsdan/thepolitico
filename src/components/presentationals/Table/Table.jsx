import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import logo from '../../../assets/images/official/favicon.png';

const Table = ({ header, content }) => {
  const items = content.map((item, key) => {
    return (
      <tbody key={key}>
        <tr>
          <td>
            {item.logo ? <img src={item.logo} className="circle" /> : item.id}
          </td>
          <td> {item.title} </td>
          <td> {item.description} </td>
          <td>
            {item.logo && (
              <Link to={`parties/${item.id}/edit`} className="button blue">
                edit
              </Link>
            )}
            <Link
              to="#delete"
              onClick={() => {
                alert(item.id);
              }}
              className="button red"
            >
              delete
            </Link>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <table className="party-admin">
      <tbody>
        <tr>
          <th>{header.one}</th>
          <th>{header.two}</th>
          <th>{header.three}</th>
          <th>action</th>
        </tr>
      </tbody>
      {items}
    </table>
  );
};

Table.propTypes = {
  header: PropTypes.object,
  content: PropTypes.array,
};

export default Table;
