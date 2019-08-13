import React from "react";
import Navbar from "../../components/navbar";
import CenteredTabs from "../../components/menubar";

export class App extends React.Component {

  render = () => {
    return (
      <header>
        <Navbar></Navbar>
        <CenteredTabs></CenteredTabs>
      </header>
    );
  };
}
