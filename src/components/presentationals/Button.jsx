import React from 'react';

const Button = props => {
  if (props.button.type === 'href') {
    return (
      <a href={props.button.href} className={props.button.class}>
        {props.button.value}
      </a>
    );
  } else {
    return (
      <button className={props.button.class} type={props.button.type}>
        {props.button.value}
      </button>
    );
  }
};
export default Button;
