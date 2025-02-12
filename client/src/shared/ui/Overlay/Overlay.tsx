import { memo } from 'react';
import cls from './Overlay.module.css';

interface Props {
  onClick?: () => void;
}

export const Overlay = memo((props: Props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className={cls.Overlay}
    />
  );
});
