import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar';

describe('<NavBar />', () => {
  const pages = [
    {
      title: 'home',
      url: './',
      className: '',
    },
    {
      title: 'results',
      url: './results',
      className: '',
    },
  ];

  it('should render correctly', () => {
    const component = shallow(<NavBar pages={pages} />);
    expect(component).toMatchSnapshot();
  });
});
