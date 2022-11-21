import { fireEvent, render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom';
import * as React from 'react';
import { UserForm } from './UserForm';

function renderUserForm() {
  const defaultProps = {
    setName: jest.fn(),
  };
  return render(<UserForm {...defaultProps} />);
}

describe('<Title />', () => {
  it('renders the button', async () => {
    const { findByText } = renderUserForm();
    const button = await findByText('Search');
    expect(button).toBeInTheDocument();
  });

  it('renders the input', () => {
    const { container } = renderUserForm();
    const input = container.querySelector('input[name="name"]');
    expect(input).toBeInTheDocument();
  });

  it('should not render an error if form not interacted with', () => {
    renderUserForm();
    const error = screen.queryByText('A user or organisation name is required!');
    expect(error).not.toBeInTheDocument();
  });

  it('renders an error if button clicked on empty form', async () => {
    const { findByText } = renderUserForm();
    const button = await findByText('Search');
    fireEvent.click(button);
    const error = await findByText('A user or organisation name is required!');
    expect(error).toBeInTheDocument();
  });

  it('Should not render an error if a name has been entered', async () => {
    const { container, findByText } = renderUserForm();
    const input = container.querySelector('input[name="name"]');
    fireEvent.change(input, { target: { value: 'test' } });
    const button = await findByText('Search');
    fireEvent.click(button);
    expect(input).toBeInTheDocument();
    const error = screen.queryByText('A user or organisation name is required!');
    expect(error).not.toBeInTheDocument();
  });
});
