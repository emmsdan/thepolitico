import React from 'react';
import { shallow } from 'enzyme';

import CallToAction from './CallToAction';

describe('<CallToAction />', () => {
  it('should render correctly without button', () => {
    const component = shallow(<CallToAction />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with button', () => {
    const component = shallow(<CallToAction withButton={true} />);
    expect(component).toMatchSnapshot();
  });
});
