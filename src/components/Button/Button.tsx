import React, { ReactNode } from 'react';
import * as classes from './Button.module.scss';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  children?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  size,
  children,
  className,
  ...rest
}) => {
  const classesProp = [
    classes['button-lib'],
    classes[`button-lib-${variant}`],
    classes[`button-lib-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classesProp} {...rest}>
      {children}
    </button>
  );
};

export default Button;
