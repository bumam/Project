import React, { Suspense } from "react";
import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRoute } from "app/providers/router/ui/AppRoute";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div></div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoute />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
