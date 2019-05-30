import React from 'react';
import { shallow } from 'enzyme';

import PartyCard from './PartyCard';

const party = {
  id: 23,
  logourl: 'dfsnsdfds',
  name: 'Daniel',
  hqaddress: 'lekki phase 11',
  className: 'party-card-2',
};
describe('<PartyCard />', () => {
  it('should render correctly', () => {
    const component = shallow(<PartyCard {...party} />);
    expect(component).toMatchSnapshot();
  });
});
