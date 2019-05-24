import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './FormInput';

describe('<FormInput />', () => {
  const input = {
    type: 'submit',
    className: 'bg-gray',
    id: 'emailAddress',
    title: 'Email Address',
    name: 'email',
    placeholder: 'enter your email address',
    defaultValue: 'sample@email.com',
  };

  it('should render correctly', () => {
    const component = shallow(<FormInput {...input} />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should display input label correctly', () => {
    const component = shallow(<FormInput {...input} />);
    expect(component.find('label').text()).toEqual(`${input.title}:`);
    component.unmount();
  });

  it('should display input name correctly', () => {
    const component = shallow(<FormInput {...input} />);
    const inputField = component.find('input');
    expect(inputField.prop('defaultValue')).toEqual(input.defaultValue);
    component.unmount();
  });
});
