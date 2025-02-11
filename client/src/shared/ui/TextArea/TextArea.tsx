import React, { TextareaHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './TextArea.module.css';

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange'
>;

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  label: string;
  onChange?: (value: string) => void;
}

export const TextArea = memo((props: TextAreaProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    label,
    required,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.required]: required
  };

  return (
    <div
      className={classNames(cls.TextAreaWrapper, mods, [
        className,
      ])}
    >
      <label className={cls.label}>{label}</label>
      <textarea
        value={value}
        onChange={onChangeHandler}
        className={cls.textArea}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});
