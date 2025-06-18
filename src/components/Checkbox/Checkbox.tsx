import React from 'react';
import * as styles from './Checkbox.module.scss';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({ className, ...restProps }) => {
  const classes = [styles[`checkbox-lib`], className].filter(Boolean).join(' ');

  return (
    <span className={styles['checkbox-container']}>
      <input className={classes} type='checkbox' {...restProps} />
      <svg viewBox='0 0 15 11' fill='none' aria-hidden='true'>
        <path d='M1 4.5L5 9L14 1' strokeWidth='2' stroke='#fff' />
      </svg>
    </span>
  );
};

export default Checkbox;
