import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.css';
import { Portal } from '../Portal/Portal';


interface ModalProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

    const mods: Mods = {
      [cls.opened]: isOpen,
      [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
      return null;
    }

    return (
      <Portal element={document.getElementById('app') ?? document.body}>
        <div
          className={classNames(cls.Modal, mods, [])}
        >
          <Overlay onClick={close} />
          <div className={cls.content}>{children}</div>
        </div>
      </Portal>
    );
};
