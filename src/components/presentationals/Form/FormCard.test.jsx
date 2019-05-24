import React from 'react';
import { shallow } from 'enzyme';

import FormCard from './FormCard';

describe('<FormCard />', () => {
  const header = 'The Sample Header';
  const Input = () => (
    <input className="my_sample_input" defaultValue="my awesome input sample" />
  );

  it('should render correctly', () => {
    const component = shallow(
      <FormCard header={header}>
        <Input />
      </FormCard>,
    );
    expect(component).toMatchSnapshot();
  });
});
