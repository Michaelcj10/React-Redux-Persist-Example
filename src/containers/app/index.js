import React from "react";
import { Route, Link } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from '@material-ui/core/Badge';
import Navbar from "../../components/navbar";
import CenteredTabs from "../../components/menubar";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";
import posed, { PoseGroup } from "react-pose";
const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});


export class App extends React.Component {

  render = () => {
    return (

      <PoseGroup>
      <RouteContainer key={location.pathname}>
      <div>
      <header>
        <Navbar></Navbar>
        <CenteredTabs></CenteredTabs>
      </header>
    </div>

      </RouteContainer>
</PoseGroup>

    );
  };
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      goToAbout: () => push("/messages"),
      goHome: () => push("/")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
