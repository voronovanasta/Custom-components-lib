import Button from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('button should be in the DOM', () => {
    render(<Button size='large' />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
  it('button should be disabled', () => {
    const { getByRole } = render(<Button disabled size='medium' />);
    expect(getByRole('button')).toBeDisabled();
  });

  it('button should be focused', () => {
    const { getByRole } = render(<Button size='small' autoFocus />);
    expect(getByRole('button')).toHaveFocus();
  });

  it('button should be small-sized', () => {
    const { getByRole } = render(<Button size='small' />);
    expect(getByRole('button')).toHaveClass('button-lib-small');
  });

  it('button should be medium-sized', () => {
    const { getByRole } = render(<Button size='medium' />);
    expect(getByRole('button')).toHaveClass('button-lib-medium');
  });

  it('button should be large-sized', () => {
    const { getByRole } = render(<Button size='large' />);
    expect(getByRole('button')).toHaveClass('button-lib-large');
  });

  it('button should be text-variant', () => {
    const { getByRole } = render(<Button variant='text' size='small' />);
    expect(getByRole('button')).toHaveClass('button-lib-text');
  });

  it('button should be contained-variant', () => {
    const { getByRole } = render(<Button variant='contained' size='small' />);
    expect(getByRole('button')).toHaveClass('button-lib-contained');
  });

  it('button should be outlined-variant', () => {
    const { getByRole } = render(<Button variant='outlined' size='small' />);
    expect(getByRole('button')).toHaveClass('button-lib-outlined');
  });

  it('button should be outlined-variant as default when prop variant is not provided', () => {
    const { getByRole } = render(<Button size='small' />);
    expect(getByRole('button')).toHaveClass('button-lib-outlined');
  });
});
