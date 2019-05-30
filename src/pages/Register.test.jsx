import React from 'react';
import { mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Register from './Register';
let store = {};
describe('Register', () => {
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
    const component = mount(<Register store={store} />);
    expect(component).toMatchSnapshot();
  });

  it('should simulate submit correctly', () => {
    const component = mount(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const node = component.find('button').simulate('click');
    expect(node).toMatchSnapshot();
  });
});
