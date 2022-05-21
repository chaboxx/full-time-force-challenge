import { FC } from "react";

import { BrowserRouter, Routes , Route } from "react-router-dom";

import { HomeScreen } from "../pages/HomeScreen";

export const MainRoutes : FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}
