import React from 'react';
import * as styles from './Switch.module.scss';

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<SwitchProps> = ({ className, ...restProps }) => {
  const classes = [styles['switch-lib'], className].filter(Boolean).join(' ');

  return (
    <span className={styles['switch-container']}>
      <input className={classes} type='checkbox' {...restProps} />
      <span className={styles.toggler}></span>
    </span>
  );
};

export default Switch;
