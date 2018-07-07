import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const storageMock = {
  clear: jest.fn(),
  getItem: jest.fn(),
  setItem: jest.fn()
};

(global as any).sessionStorage = storageMock;
(global as any).localStorage = storageMock;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
