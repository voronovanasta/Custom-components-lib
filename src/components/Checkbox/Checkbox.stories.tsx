import { StoryFn, Meta } from '@storybook/react-webpack5';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { onChange: { action: 'click' } },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <form>
    <Checkbox {...args} />
  </form>
);

export const Required = Template.bind({});
Required.args = {
  required: true,
  defaultChecked: false,
  name: 'age',
  value: '18',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'age',
  value: '18',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  defaultChecked: true,
  name: 'age',
  value: '18',
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
  defaultChecked: true,
  name: 'age',
  value: '18',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  name: 'age',
  value: '18',
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
  name: 'age',
  value: '18',
};
