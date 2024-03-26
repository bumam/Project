import { someFn } from "./test";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/aboutPage.async";
import { MainPageAsync } from "./pages/MainPage/mainPage.async";

someFn(123);

render(
  <BrowserRouter>
    <Link to={"/about"}> About</Link>
    <Link to={"/"}>Main</Link>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/about"} element={<AboutPageAsync />} />
        <Route path={"/"} element={<MainPageAsync />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,

  document.getElementById("root"),
);
