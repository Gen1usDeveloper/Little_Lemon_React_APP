//import './App.css';
import Header from "./Header.js";
import Main from "./Main";
import Footer from "./Footer";
import Nav from "./Nav";
import React,{Fragment} from "react";

function App() {
  return (
    <Fragment>
    <Header className="header"/>
    <Nav></Nav>
      <Main>
      <p>This is my Capstone PRoject For my coursera certification. </p>
      </Main>
      <Footer>
        © 2023 | Muhammad Jawad khan
      </Footer>
    </Fragment>
  );
}

export default App;
