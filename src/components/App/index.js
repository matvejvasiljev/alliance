import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Header from "../Header";
import Main from "../Main";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};
