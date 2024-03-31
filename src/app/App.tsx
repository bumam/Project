import React from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import AppRoute from "app/providers/router/ui/AppRoute";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/about"}> About</Link>
      <Link to={"/"}>Main</Link>
      <AppRoute />
    </div>
  );
};

export default App;
