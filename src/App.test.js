import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

configure({adapter: new Adapter()});

describe('<App />', () => {
let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render <App /> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render <button /> component', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render <div /> component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render <img /> component', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render <h1 /> component', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render <p /> component', () => {
    expect(wrapper.find('p')).toHaveLength(2);
  });
} );

