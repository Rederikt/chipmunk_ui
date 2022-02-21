import React from "react";
import { Header } from './components';
import "./index.scss"
import { Main } from './containers';

const App = () => {
  return(
    <>
      <Header/>
      <div className="wrapper">
        <Main/>
      </div>
    </>

  )
};

export default App;