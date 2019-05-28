import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import NavBar from './NavBar';

let store;
describe('<NavBar />', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ auth: { isLoading: false } });
  });

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
    const component = shallow(
      <Provider store={store}>
        <NavBar pages={pages} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
