import { StoryFn, Meta } from '@storybook/react-webpack5';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithPlaceholderAndTypeProps = Template.bind({});
WithPlaceholderAndTypeProps.args = {
  placeholder: 'Text',
  type: 'submit',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true,
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
};

export const ValueProp = Template.bind({});
ValueProp.args = {
  value: 'Value',
};

export const ReadOnlyProp = Template.bind({});
ReadOnlyProp.args = {
  value: 'Readonly',
  readOnly: true,
};

export const SizeProp = Template.bind({});
SizeProp.args = {
  size: 16,
  type: 'text',
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  type: 'password',
  autoComplete: 'on',
  required: true,
  pattern: '[A-Za-z]{3}',
};

export const EmailType = Template.bind({});
EmailType.args = {
  type: 'email',
  multiple: true,
  title: 'Enter email',
};

export const NumberType = Template.bind({});
NumberType.args = {
  type: 'number',
  min: '1',
  max: '100',
  step: 3,
};
