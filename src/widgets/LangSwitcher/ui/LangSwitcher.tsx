import { classNames } from "shared/lib/classNames/classNames";
import s from "./LangSwitcher.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = () => {
  const { t } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(s.LangSwitcher)}
      theme={ThemeButtonEnum.CLEAR}
      onClick={toggle}
    >
      {t("Language")}
    </Button>
  );
};
