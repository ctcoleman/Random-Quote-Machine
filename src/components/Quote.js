import { React, Component } from 'react';
import { Typography } from '@mui/material';

import './Quote.css';

export default class Quote extends Component {
  render() {
    return (
      <div className="Quote" style={{ color: `${this.props.newColor}` }}> 
        <Typography id="text" paragraph>{ this.props.text }</Typography>
        <Typography id="author" paragraph>- { this.props.author }</Typography>
      </div>
    );
  };
};
