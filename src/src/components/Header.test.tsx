import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import logo from '../logo.svg';
import Header from './Header';

describe(Header, () => {
  const pageTitle = 'React app with oidc-client-js';

  const component = shallow(<Header pageTitle={pageTitle} logoSrc={logo} />);

  it('renders and matches our snapshot', () => {
    const headerComponent = renderer.create(<Header pageTitle={pageTitle} logoSrc={logo} />);
    const tree = headerComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the image and h1', () => {
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('h1')).toHaveLength(1);
  });

  it('h1 contains correct title', () => {
    expect(component.find('h1').text()).toEqual(pageTitle);
    expect(component.contains(pageTitle)).toEqual(true);
  });
});
