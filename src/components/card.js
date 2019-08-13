import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class SimpleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onNumberChange = () =>{
    this.props.increment(this.numberEntry.value);
  }

  render = () => {
    return (
        <Card style={{minWidth: '250px'}}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {this.props.reducer}
        </Typography>
        <Typography variant="body2" component="p">
          {this.props.value}
        </Typography>
      </CardContent>
    </Card>
    );
  };
}
