import { StoryFn, Meta } from '@storybook/react-webpack5';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { onChange: { action: 'click' } },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  checked: true,
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  name: 'age',
  value: '18',
};

export const OnChange = Template.bind({});
OnChange.args = {
  name: 'age',
  value: '18',
  onChange: (e) => console.log(e.target.value),
};
