import { StoryFn, Meta } from '@storybook/react-webpack5';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Text',
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  children: 'Text',
  autoFocus: true,
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Text',
  variant: 'contained',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'text',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Text',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Text',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Text',
  size: 'medium',
};
