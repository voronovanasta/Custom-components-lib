import React from 'react';
import * as styles from './TextField.module.scss';
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
const TextField: React.FC<TextFieldProps> = ({ error, className, ...rest }) => {
  const classes = [styles['textfield-lib'], className];
  if (error) {
    classes.push(styles['textfield-lib-error']);
  }
  const classStr = classes.filter(Boolean).join(' ');

  return (
    <div className={classStr}>
      <input id='input' className={styles['input-lib']} {...rest} />
    </div>
  );
};

export default TextField;
