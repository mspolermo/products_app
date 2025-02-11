import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.css';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type ButtonVariant = 'black' | 'yellow' | 'red';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = (props: Props) => {
  const {
    className,
    children,
    variant = 'black',
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, [
          className,
          cls[variant],
        ])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
};
