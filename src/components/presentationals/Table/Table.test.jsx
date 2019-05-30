import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

const table = {
  header: {
    one: 'Logo',
    two: 'party name',
    three: 'HEAD QUARTER ADDRESS',
  },
  content: [
    {
      id: 1,
      logo: 'party.logourl',
      title: 'party name',
      description: 'party hqaddress',
    },
  ],
};

describe('<Table />', () => {
  it('should render correctly', () => {
    const component = shallow(<Table {...table} />);
    expect(component).toMatchSnapshot();
  });
});
