import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  const footer = {
    url: 'http://thepolitico.io/about',
    poweredby: {
      url: 'http://twitter.com/emmsdan',
      name: 'emmanuel daniel',
    },
  };

  it('should render correctly', () => {
    const component = shallow(<Footer {...footer} />);
    expect(component).toMatchSnapshot();
  });
});
