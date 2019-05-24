import React from 'react';

const Button = ({ button }) => {
  if (button.type === 'href') {
    return (
      <a href={button.href} className={button.className}>
        {button.value}
      </a>
    );
  } else {
    return (
      <button className={button.className} type={button.type}>
        {button.value}
      </button>
    );
  }
};
export default Button;
