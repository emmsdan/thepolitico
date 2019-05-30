import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import logo from '../../../assets/images/official/favicon.png';

const Table = ({ header, content, onClick }) => {
  const items = content.map((item, key) => {
    return (
      <tbody key={key}>
        <tr>
          <td>
            {item.logo ? (
              <img
                src={`${process.env.IMAGE_CLOUD}/${item.logo}`}
                className="circle"
              />
            ) : (
              item.id
            )}
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
              onClick={() => onClick(item.title, item.id)}
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
  onClick: PropTypes.any,
};

export default Table;
