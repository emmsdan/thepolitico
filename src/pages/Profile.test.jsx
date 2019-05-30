import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Profile from './Profile';

let store;
describe('Profile', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({
      parties: { parties: [] },
      offices: { offices: [] },
    });
  });

  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
