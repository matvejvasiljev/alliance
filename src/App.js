import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
};
