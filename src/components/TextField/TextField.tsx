import React from 'react';
import './TextField.scss';
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
const TextField: React.FC<TextFieldProps> = ({ error, className, ...rest }) => {
  let classes = [`textfield-lib`, className];
  if (error) {
    classes.push('textfield-lib-error');
  }
  const classStr = classes.filter(Boolean).join(' ');

  return (
    <div className={classStr}>
      <input id='input' className='input-lib' {...rest} />
    </div>
  );
};

export default TextField;
