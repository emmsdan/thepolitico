import React from 'react';
import { shallow } from 'enzyme';

import FormButton from './FormButton';

describe('<FormButton />', () => {
  const button = {
    type: 'submit',
    className: 'bg-gray',
    text: 'Create an Account today',
  };

  it('should render correctly', () => {
    const component = shallow(<FormButton {...button} />);
    expect(component).toMatchSnapshot();
  });

  it('should display button text correctly', () => {
    const component = shallow(<FormButton {...button} />);
    expect(component).toMatchSnapshot();
    expect(component.find('.bg-gray').text()).toEqual(button.text);
  });
});
