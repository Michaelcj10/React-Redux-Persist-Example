import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log(event);
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Payment"  onClick={()=>{
              this.props.changePage("/");
          }} />
          <Tab label="Counter" onClick={()=>{
              this.props.changePage("/count");
          }} />
        </Tabs>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (page) => push(page)
    },
    dispatch
  );

export default connect(
    null,mapDispatchToProps
)(withStyles(styles)(CenteredTabs));

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

