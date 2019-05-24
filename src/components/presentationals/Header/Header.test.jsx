import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  const header = [
    { url: '/index', title: 'Home' },
    { url: '/office', title: 'office' },
    { url: '/election-result', title: 'result' },
    { url: '/auth', title: 'My Account' },
  ];

  it('should render correctly', () => {
    const component = shallow(<Header page={header} />);
    expect(component).toMatchSnapshot();
  });
});
