import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image />', () => {
  const image = {
    src: 'http://image-url/dsf.png',
    alt: 'flowers',
    className: '',
    style: '',
  };

  it('should render correctly', () => {
    const component = shallow(<Image {...image} />);
    expect(component).toMatchSnapshot();
  });
});
