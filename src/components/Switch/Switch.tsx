import React from 'react';
import './Switch.scss';

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<SwitchProps> = ({ className, ...restProps }) => {
  const classes = [`switch-lib`, className].filter(Boolean).join(' ');

  return (
    <span className='switch-container '>
      <input className={classes} type='checkbox' {...restProps} />
      <span className='toggler'></span>
    </span>
  );
};

export default Switch;
