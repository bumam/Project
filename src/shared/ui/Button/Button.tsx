import { classNames } from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButtonEnum {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(s.Button, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
