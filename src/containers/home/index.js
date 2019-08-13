import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import {setCardNumber} from "../../modules/payment";
import TextField from '@material-ui/core/TextField';
import {SimpleCard} from "../../components/card";
import Typography from '@material-ui/core/Typography';

export class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  onCardNumberChange = () =>{
    this.props.setCardNumber(this.cardNumberEntry.value);
  }

  render = () => {
    return (
      <>
      <Grid container spacing={16} style={{marginTop: '50px', marginBottom: '150px'}}>
        <Grid item xs={12}>
            <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
              Payment
            </Typography>
            </Grid>
          </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
          <TextField
            inputRef={(input) => { this.cardNumberEntry = input; }}
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={this.onCardNumberChange}
            inputProps={{ maxLength: 16 }}
            value={this.props.cardNumber}
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
      setCardNumber
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
