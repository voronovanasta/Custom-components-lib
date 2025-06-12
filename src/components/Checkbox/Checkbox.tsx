import React, { useEffect, useState } from 'react';
import './Checkbox.scss';
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;
const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked: checkedProp,
  onChange,
  ...restProps
}) => {
  const classes = [`checkbox-lib`, className].filter(Boolean).join(' ');
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    if (checkedProp) {
      setCheckedState(true);
    }
  }, [checkedProp]);

  function clickHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    onChange?.(event);
  }
  return (
    <span className={`checkbox-container ${checkedState ? 'checked' : ''}`}>
      <input
        className={classes}
        type='checkbox'
        onChange={clickHandler}
        checked={checkedState}
        {...restProps}
      ></input>
      <svg viewBox='0 0 15 11' fill='none' aria-hidden='true'>
        <path d={'M1 4.5L5 9L14 1'} strokeWidth={'2'} stroke={checkedState ? '#fff' : 'none'} />
      </svg>
    </span>
  );
};

export default Checkbox;
