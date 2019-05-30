import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import OfficeList from './OfficeList';

let store;
describe('OfficeList', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({
      offices: { offices: [] },
      getOfficeRequestHandler: jest.fn(),
    });
  });

  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <OfficeList {...store} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
