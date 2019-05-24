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

  it('should simulate close Modal correctly', () => {
    const component = mount(<Modal {...modalContent} />);
    const onclick = component.find('.deleteModal');
    console.log(onclick.simulate('click'))
    expect(modalContent.action.onClick).toHaveBeenCalledTimes(1);
  });
});
