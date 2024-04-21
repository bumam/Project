import { classNames } from "shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import React, { FC, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed })}>
      <button onClick={onToggle}>Toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
