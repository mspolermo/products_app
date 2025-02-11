import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Checkbox.module.css';
import { CheckmarkIcon } from '@/shared/assets/icons/CheckmarkIcon';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange'
>;

interface CheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    className,
    checked = false,
    onChange,
    label,
    required,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const mods: Mods = {
    [cls.required]: required
  };

  return (
    <div className={classNames(cls.CheckboxWrapper, mods, [className])}>
      <label className={cls.checkboxLabel}>
      <span className={cls.label}>{label}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
          className={cls.checkbox}
          {...otherProps}
        />
        <span className={cls.customCheckbox}>{checked && <CheckmarkIcon />}</span>
      </label>
    </div>
  );
});
