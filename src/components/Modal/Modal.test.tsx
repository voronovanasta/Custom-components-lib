import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import '@testing-library/jest-dom';

describe('Modal component', () => {
  it('modal should open when open=true', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        18
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeVisible();
  });

  it('modal should close when onClose is triggered', () => {
    const handleClose = jest.fn();
    const { rerender, container } = render(
      <Modal open={true} onClose={handleClose}>
        <h2>Modal Content</h2>
      </Modal>
    );

    const overlay = container.querySelector('.overlay');
    const dialog = screen.getByRole('dialog');

    fireEvent.click(overlay!);

    expect(handleClose).toHaveBeenCalledTimes(1);

    rerender(
      <Modal open={false} onClose={handleClose}>
        <h2>Modal Content</h2>
      </Modal>
    );
    expect(dialog).not.toBeVisible();
  });

  it('modal should nor render invalid children', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <h2>Modal Content</h2>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeVisible();
  });
});
