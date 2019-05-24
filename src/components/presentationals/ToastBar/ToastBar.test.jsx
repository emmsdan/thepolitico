import React from 'react';
import { shallow } from 'enzyme';

import ToastBar from './ToastBar';

describe('<ToastBar />', () => {
  const toastbar = {
    message: 'Hi, I am a toastbar',
    className: 'bg-gray',
  };

  it('should render correctly', () => {
    const component = shallow(<ToastBar {...toastbar} />);
    expect(component).toMatchSnapshot();
  });

  it('should display message correctly', () => {
    const component = shallow(<ToastBar {...toastbar} />);
    expect(component).toMatchSnapshot();
    expect(component.find('.toast').text()).toEqual(toastbar.message);
  });

  it('should simulate close toastbar correctly', () => {
    const component = shallow(<ToastBar {...toastbar} />);
    component.find('.toast').simulate('click');
    expect(component.find('.toast.hide').text()).toEqual(toastbar.message);
  });
});
