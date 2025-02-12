import { forwardRef, InputHTMLAttributes } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.css";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value">;

interface InputProps extends HTMLInputProps {
  className?: string;
  label: string;
  required?: boolean;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", placeholder, label, required, error, ...otherProps }, ref) => {
    const mods: Mods = {
      [cls.required]: required,
      [cls.error]: !!error,
    };

    return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
        <label className={cls.label}>{label}</label>
        <input
          ref={ref}
          type={type}
          className={cls.input}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
