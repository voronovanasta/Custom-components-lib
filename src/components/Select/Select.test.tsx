import Select from './Select';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('select should be in the DOM', () => {
    render(<Select data-testid='select' />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });
  it('select should be disabled', () => {
    const { getByRole } = render(<Select disabled />);
    expect(getByRole('textbox')).toBeDisabled();
  });

  it('select should be focused', () => {
    const { getByRole } = render(<Select autoFocus />);
    expect(getByRole('textbox')).toHaveFocus();
  });

  it('select should be required', () => {
    const { getByRole } = render(<Select required />);
    expect(getByRole('textbox')).toBeRequired();
  });
  it('should show only the number of elements equal to size, the rest are hidden', async () => {
    const size = 3;
    const options = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
    ];

    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      value: 200,
    });

    const { getByRole, getByTestId } = render(
      <Select size={size}>
        {options.map((opt) => (
          <option key={opt.value} style={{ height: '40px' }} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    );

    const input = getByRole('textbox');
    fireEvent.click(input);

    const listContainer = getByTestId('select-list') as HTMLElement;

    await waitFor(() => {
      expect(listContainer!.style.height).toBe('120px');
    });
  });

  it('allows multiple selection and selected options have class "selected"', () => {
    const { getByTestId, getByRole } = render(
      <Select multiple>
        <option key={1} data-testid='item1' value={1}>
          {' '}
          1
        </option>
        <option key={2} data-testid='item2' value={2}>
          {' '}
          2
        </option>
        <option key={3} data-testid='item3' value={3}>
          {' '}
          3
        </option>
        <option key={4} data-testid='item4' value={4}>
          {' '}
          4
        </option>
        <option key={5} data-testid='item5' value={5}>
          {' '}
          5
        </option>
      </Select>
    );

    const input = getByRole('textbox');
    fireEvent.click(input);

    const option1 = getByTestId('item1');
    const option2 = getByTestId('item2');

    fireEvent.click(option1);
    fireEvent.click(option2);

    expect(option1).toHaveClass('selected');
    expect(option2).toHaveClass('selected');

    const option3 = getByTestId('item3');
    expect(option3).not.toHaveClass('selected');
  });

  it('hover works on select', () => {
    const handleMouseOver = jest.fn();
    const handleMouseOut = jest.fn();

    const { getByRole } = render(
      <Select onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
    );

    const select = getByRole('textbox');

    fireEvent.mouseOver(select);
    expect(handleMouseOver).toHaveBeenCalled();

    fireEvent.mouseOut(select);
    expect(handleMouseOut).toHaveBeenCalled();
  });

  it('blur works on select', () => {
    const handleBlur = jest.fn();

    const { getByRole } = render(<Select onBlur={handleBlur} />);

    const select = getByRole('textbox');
    select.focus();
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalled();
  });
});
