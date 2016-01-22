import React from 'react';
import BarWrapper from '../index.es6';
import { stub, spy } from 'sinon';

describe('BarWrapper component', () => {
  it('is compatible with React.Component', () => {
    BarWrapper.should.be.a('function').and.respondTo('render');
  });
  it('renders a React element', () => {
    React.isValidElement(
      <BarWrapper/>
    ).should.equal(true);
  });
});
