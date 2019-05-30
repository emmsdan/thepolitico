import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import OfficeList from './OfficeList';

const props = {
  getPartyRequestHandler: jest.fn(),
  isLoading: false,
  offices: [{}, {}],
};

let store;
describe('OfficeList', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ ...props });
  });

  it('should render correctly', () => {
    const component = shallow(<OfficeList store={store} />);
    expect(component).toMatchSnapshot();
  });
});
