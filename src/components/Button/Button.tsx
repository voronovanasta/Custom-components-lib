import React, { ReactNode } from 'react';
import './Button.scss';
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
  const classes = [`button-lib`, `button-lib-${variant}`, `button-lib-${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
