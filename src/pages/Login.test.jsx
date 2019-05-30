import React from 'react';
import { mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Login from './Login';
let store = {};
describe('Login', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({
      history: [],
      location: {},
      auth: { isLoading: true },
      authenticationRequestHandler: jest.fn(),
    });
  });

  it('should render correctly', () => {
    const component = mount(<Login store={store} />);
    expect(component).toMatchSnapshot();
  });

  it('should simulate submit correctly', () => {
    const component = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    const node = component.find('button').simulate('click');
    expect(node).toMatchSnapshot();
  });
});
