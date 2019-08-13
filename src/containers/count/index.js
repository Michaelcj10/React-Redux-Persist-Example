import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import {increment} from "../../modules/counter";
import TextField from '@material-ui/core/TextField';
import {SimpleCard} from "../../components/card";
import Typography from '@material-ui/core/Typography';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  onNumberChange = () =>{
    this.props.increment(this.numberEntry.value);
  }

  render = () => {
    return (
      <>
        <Grid container spacing={16} style={{marginTop: '50px', marginBottom: '150px'}}>
          <Grid item xs={12}>
            <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
              Counter
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <TextField
                label="Number"
                inputRef={(input) => { this.numberEntry = input; }}
                type="number"
                value={this.props.count}
                onChange={this.onNumberChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={16} style={{marginTop: '100px'}}>
        <Grid item xs={12}>
          <Grid container justify="center">
          <SimpleCard reducer={'Counter reducer'} value={`Count in Redux => ${this.props.count} `} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
          <SimpleCard reducer={'Payment reducer'} value={this.props.cardNumber.length > 0  ? this.props.cardNumber : 'Empty'} />
          </Grid>
        </Grid>
      </Grid>
      </>
    );
  };
}

const mapStateToProps = ({ counter , payment }) => ({
  count: counter.count,
  cardNumber: payment.cardNumber
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      changePage: (value) => push(value)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
