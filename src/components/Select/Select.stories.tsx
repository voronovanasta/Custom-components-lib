import { StoryFn, Meta } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { onChange: { action: 'click' } },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Required = Template.bind({});
Required.args = {
  required: true,
  children: [
    <option key='18' value='18'>
      18
    </option>,
    <option key='19' value='19'>
      19
    </option>,
    <option key='20' value='20'>
      20
    </option>,
    <option key='21' value='21'>
      18
    </option>,
    <option key='22' value='22'>
      19
    </option>,
    <option key='23' value='23'>
      20
    </option>,
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: [
    <option key='18' value='18'>
      18
    </option>,
    <option key='19' value='19'>
      19
    </option>,
    <option key='20' value='20'>
      20
    </option>,
    <option key='21' value='21'>
      18
    </option>,
    <option key='22' value='22'>
      19
    </option>,
    <option key='23' value='23'>
      20
    </option>,
  ],
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  children: [
    <option key='18' value='18'>
      18
    </option>,
    <option key='19' value='19'>
      19
    </option>,
    <option key='20' value='20'>
      20
    </option>,
    <option key='21' value='21'>
      18
    </option>,
    <option key='22' value='22'>
      19
    </option>,
    <option key='23' value='23'>
      20
    </option>,
  ],
  autoFocus: true,
};

export const WithSizeAndMultiple = Template.bind({});
WithSizeAndMultiple.args = {
  multiple: true,
  size: 2,
  children: [
    <option key='18' value='18'>
      18
    </option>,
    <option key='19' value='19'>
      19
    </option>,
    <option key='20' value='20'>
      20
    </option>,
    <option key='21' value='21'>
      18
    </option>,
    <option key='22' value='22'>
      19
    </option>,
    <option key='23' value='23'>
      20
    </option>,
  ],
};
