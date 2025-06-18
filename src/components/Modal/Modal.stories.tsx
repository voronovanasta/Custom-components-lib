import { StoryFn, Meta } from '@storybook/react-webpack5';
import Modal from './Modal';
import { useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  const toggleModal = (state: boolean) => {
    setOpen(state);
    document.body.style.overflow = state ? 'hidden' : 'auto';
  };

  return (
    <>
      <button
        style={{ backgroundColor: 'blue', color: 'white', border: 'none' }}
        onClick={() => toggleModal(true)}
      >
        Open
      </button>
      <Modal {...args} open={open} onClose={() => toggleModal(false)} />
    </>
  );
};

export const BasicModal = Template.bind({});
BasicModal.args = {
  children: <h2>Header of Modal Component</h2>,
};
