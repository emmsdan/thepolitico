import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  const button = {
    className: 'btn-large',
    value: 'create account',
    type: 'button',
    href: 'user-url',
  };

  it('should render correctly', () => {
    const component = shallow(<Button button={button} />);
    expect(component).toMatchSnapshot();
  });

  it('should render link button correctly', () => {
    button.type = 'href';
    const component = shallow(<Button button={button} />);
    expect(component).toMatchSnapshot();
  });
});
