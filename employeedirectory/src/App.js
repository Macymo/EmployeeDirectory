import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
// import Main from "./components/main";
// import DataBody from "./components/dataBody";
// import DataTable from "./components/dataTable";
import Wrapper from "./components/Wrapper";


function App() {
  return (
      <div>
        <Header />
        <NavBar />
        {/* <Main /> */}
        <Wrapper>
          {/* <DataBody /> */}
          {/* <DataTable /> */}
        </Wrapper>
      </div>
  );
}

export default App;
