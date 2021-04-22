import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from './Notes';
import Content from './Content';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
  <>
    <Header/>
    <Note/>
    {/* <Footer/> */}
  </>,
  document.getElementById("root")
);
