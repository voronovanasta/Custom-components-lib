import React, { ReactNode, useEffect } from 'react';
import * as styles from './Modal.module.scss';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}
const Modal: React.FC<ModalProps> = ({ open, children, onClose, ...restProps }) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.visible : styles.hidden}`}
        onClick={onClose}
      >
        {open && (
          <div
            role='dialog'
            className={`${styles['modal-content']} ${open ? styles.visible : styles.hidden}`}
            {...restProps}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
