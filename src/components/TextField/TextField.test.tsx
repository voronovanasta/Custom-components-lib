import TextField from './TextField';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TextField', () => {
  it('textField should be in the DOM', () => {
    render(<TextField data-testid='textField' />);
    const textField = screen.getByTestId('textField');
    expect(textField).toBeInTheDocument();
  });

  it('textField should be disabled', () => {
    const { getByRole } = render(<TextField disabled />);
    expect(getByRole('textbox')).toBeDisabled();
  });

  it('textField should be focused', () => {
    const { getByRole } = render(<TextField autoFocus />);
    expect(getByRole('textbox')).toHaveFocus();
  });

  it('textField should have error label', () => {
    const { container } = render(<TextField error={true} />);
    const errorElement = container.querySelector('.textfield-lib-error');
    expect(errorElement).toBeInTheDocument();
  });

  it('should pass arbitrary input attributes', () => {
    render(
      <TextField
        placeholder='Textfield with length 10'
        maxLength={10}
        pattern='[A-Za-z]{3}'
        readOnly
        aria-label='Test label'
        autoComplete='on'
        tabIndex={3}
        title='Test title'
      />
    );

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('placeholder', 'Textfield with length 10');
    expect(input).toHaveAttribute('maxLength', '10');
    expect(input).toHaveAttribute('pattern', '[A-Za-z]{3}');
    expect(input).toHaveAttribute('readOnly');
    expect(input).toHaveAttribute('aria-label', 'Test label');
    expect(input).toHaveAttribute('autoComplete', 'on');
    expect(input).toHaveAttribute('tabIndex', '3');
    expect(input).toHaveAttribute('title', 'Test title');
  });

  it('should pass  more arbitrary input attributes', () => {
    render(<TextField type='number' placeholder='1' min={1} max={10} step={3} required />);

    const input = screen.getByRole('spinbutton');

    expect(input).toHaveAttribute('max', '10');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('step', '3');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('hover works on textField', () => {
    const handleMouseOver = jest.fn();
    const handleMouseOut = jest.fn();

    const { getByRole } = render(
      <TextField onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
    );

    const input = getByRole('textbox');

    fireEvent.mouseOver(input);
    expect(handleMouseOver).toHaveBeenCalled();

    fireEvent.mouseOut(input);
    expect(handleMouseOut).toHaveBeenCalled();
  });

  it('blur works on textField', () => {
    const handleBlur = jest.fn();

    const { getByRole } = render(<TextField onBlur={handleBlur} />);

    const input = getByRole('textbox');
    input.focus();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});
