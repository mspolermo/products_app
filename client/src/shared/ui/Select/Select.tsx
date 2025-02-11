import React, { SelectHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.css';

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends HTMLSelectProps {
  className?: string;
  value?: string | number;
  label: string;
  options: Option[];
  onChangeValue?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    value,
    onChangeValue,
    label,
    options,
    required,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeValue?.(e.target.value);
  };

  const mods: Mods = {
    [cls.required]: required,
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.SelectWrapper, mods, [className])}>
      <label className={cls.label}>{label}</label>
      <select
        className={cls.select}
        value={value}
        required={required}
        onChange={onChangeHandler}
        disabled={readonly}
        {...otherProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
