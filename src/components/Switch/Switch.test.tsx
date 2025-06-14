import Switch from './Switch';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Switch', () => {
  it('switch should be in the DOM', () => {
    render(<Switch data-testid='switch' />);
    expect(screen.getByTestId('switch')).toBeInTheDocument();
  });

  it('switch should be disabled', () => {
    const { getByRole } = render(<Switch disabled />);
    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('should toggle checked state', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Switch onChange={handleChange} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ checked: true }) })
    );
  });

  it('switch should be focused', () => {
    const { getByRole } = render(<Switch autoFocus />);
    expect(getByRole('checkbox')).toHaveFocus();
  });

  it('switch should be required', () => {
    const { getByRole } = render(<Switch required />);
    expect(getByRole('checkbox')).toBeRequired();
  });
  it('switch should be checked', () => {
    const { getByRole } = render(<Switch readOnly checked />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('hover works on switch', () => {
    const handleMouseOver = jest.fn();
    const handleMouseOut = jest.fn();

    const { getByRole } = render(
      <Switch onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
    );

    const select = getByRole('checkbox');

    fireEvent.mouseOver(select);
    expect(handleMouseOver).toHaveBeenCalled();

    fireEvent.mouseOut(select);
    expect(handleMouseOut).toHaveBeenCalled();
  });

  it('blur works on switch', () => {
    const handleBlur = jest.fn();

    const { getByRole } = render(<Switch onBlur={handleBlur} />);

    const select = getByRole('checkbox');
    select.focus();
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalled();
  });
});
