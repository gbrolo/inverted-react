/**
 *
 * Tests for LandingPage 
 *
 */

import React from 'react';
import { LandingPage } from '../index';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

describe('<LandingPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<LandingPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
