import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import PartyList from './PartyList';

const props = {
  getPartyRequestHandler: jest.fn(),
  isLoading: false,
  parties: [{}, {}],
};

let store;
describe('PartyList', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ ...props });
  });

  it('should render correctly', () => {
    const component = shallow(<PartyList store={store} />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
