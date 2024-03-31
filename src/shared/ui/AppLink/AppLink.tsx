import { classNames } from "shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

enum AppThemeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppThemeEnum;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    to,
    theme = AppThemeEnum.PRIMARY,
    className,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(s.AppLink, {}, [className, s.theme])}
    >
      {children}
    </Link>
  );
};
