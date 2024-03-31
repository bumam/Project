import React from "react";
import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRoute } from "app/providers/router/ui/AppRoute";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <AppRoute />
    </div>
  );
};

export default App;
