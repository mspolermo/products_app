import { forwardRef, SelectHTMLAttributes } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.css";

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "value">;

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends HTMLSelectProps {
  className?: string;
  label: string;
  options: Option[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, required, error, ...otherProps }, ref) => {
    const mods: Mods = {
      [cls.required]: required,
      [cls.error]: !!error,
    };

    return (
      <div className={classNames(cls.SelectWrapper, mods, [className])}>
        <label className={cls.label}>{label}</label>
        <div className={cls.selectContainer}>
          <select ref={ref} className={cls.select} {...otherProps}>
            <option value="" disabled hidden>
              Выберите вариант
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className={cls.arrow}></span>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
