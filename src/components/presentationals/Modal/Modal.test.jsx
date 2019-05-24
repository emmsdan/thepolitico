import React from 'react';
import { mount } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  const modalContent = {
    id: 'AwesomeModal',
    header: 'Sample Modal header',
    content: 'Hi, I am a Modal',
    className: 'deleteModal',
    action: {
      button: {
        text: 'delete',
        className: 'red',
      },
      onClick: jest.fn(),
    },
  };

  it('should render correctly', () => {
    const component = mount(<Modal {...modalContent} />);
    expect(component).toMatchSnapshot();
  });
});
