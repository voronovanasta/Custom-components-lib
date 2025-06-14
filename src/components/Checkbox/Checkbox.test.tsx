import Checkbox from './Checkbox';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  it('checkbox should be in the DOM', () => {
    render(<Checkbox data-testid='checkbox' />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
  });
  it('checkbox should be disabled', () => {
    const { getByRole } = render(<Checkbox disabled />);
    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('checkbox should be focused', () => {
    const { getByRole } = render(<Checkbox autoFocus />);
    expect(getByRole('checkbox')).toHaveFocus();
  });

  it('checkbox should be required', () => {
    const { getByRole } = render(<Checkbox required />);
    expect(getByRole('checkbox')).toBeRequired();
  });
  it('checkbox should be checked', () => {
    const { getByRole } = render(<Checkbox checked />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('checkbox should be default checked', () => {
    const { getByRole } = render(<Checkbox checked />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('hover works on checkbox', () => {
    const handleMouseOver = jest.fn();
    const handleMouseOut = jest.fn();

    const { getByRole } = render(
      <Checkbox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
    );

    const select = getByRole('checkbox');

    fireEvent.mouseOver(select);
    expect(handleMouseOver).toHaveBeenCalled();

    fireEvent.mouseOut(select);
    expect(handleMouseOut).toHaveBeenCalled();
  });

  it('blur works on checkbox', () => {
    const handleBlur = jest.fn();

    const { getByRole } = render(<Checkbox onBlur={handleBlur} />);

    const select = getByRole('checkbox');
    select.focus();
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalled();
  });
});
