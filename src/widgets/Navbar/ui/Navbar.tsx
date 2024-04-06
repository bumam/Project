import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={classNames(s.Navbar)}>
      <ThemeSwitcher />
      <div className={s.links}>
        <AppLink to={"/about"}>About</AppLink>
        <AppLink to={"/"}>Main</AppLink>
      </div>
    </div>
  );
};
