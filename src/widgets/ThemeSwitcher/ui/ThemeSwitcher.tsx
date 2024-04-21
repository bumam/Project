import { classNames } from "shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { FC } from "react";
import { ThemeEnum, useTheme } from "app/providers/ThemeProviders";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButtonEnum.CLEAR}
      onClick={toggleTheme}
      className={classNames(s.ThemeSwitcher, {}, [className])}
    >
      {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
