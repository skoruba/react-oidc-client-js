import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Buttons from './Buttons';

describe(Buttons, () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();
  const mockRenewToken = jest.fn();
  const mockCallApi = jest.fn();
  const mockGetUser = jest.fn();

  const component = shallow(
    <Buttons
      login={mockLogin}
      logout={mockLogout}
      renewToken={mockRenewToken}
      callApi={mockCallApi}
      getUser={mockGetUser}
    />
  );

  it('renders and matches our snapshot', () => {
    const buttonComponent = renderer.create(
      <Buttons
        login={mockLogin}
        logout={mockLogout}
        renewToken={mockRenewToken}
        callApi={mockCallApi}
        getUser={mockGetUser}
      />
    );
    const tree = buttonComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the image and h1', () => {
    expect(component.find('button')).toHaveLength(5);
  });

  it('try to click on login button', () => {
    component.find('button.btn-login').simulate('click');
    expect(mockLogin).toBeCalled();
  });

  it('try to click on logout button', () => {
    component.find('button.btn-logout').simulate('click');
    expect(mockLogout).toBeCalled();
  });
});
