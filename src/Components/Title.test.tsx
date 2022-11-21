import { render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom';
import * as React from 'react';

describe('<Title />', () => {
  it('renders the title', () => {
    render(<Title />);
    //Simple test, not the best idea to test for a string that is not a constant
    expect(screen.getByText("Github User's repository search")).toBeInTheDocument();
  });
});
