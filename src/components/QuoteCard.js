import { React, Component } from 'react';
import { Button, Card, CardActionArea, CardActions, CardMedia, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import Quote from './Quote';

import './QuoteCard.css';
import quotes from '../data/quotes.json';

export default class QuoteCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.getRandomQuote().text,
      author: this.getRandomQuote().author,
      color: this.getRandomColor()
    }

    this.handleClick = this.handleClick.bind(this)
  };


  getRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return {
      text: quote.quote,
      author: quote.author
    }
  };

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  };

  handleClick() {
    this.setState({
      text: this.getRandomQuote().text,
      author: this.getRandomQuote().author,
      color: this.getRandomColor()
    });
    console.log(this.state)
  };

  render() {
    return (
      <div id="quote-box" className="QuoteCard" style={{ color: this.state.color }}>
        <Card>
          <CardActionArea>
            <CardMedia onClick={this.handleClick}>
              <Quote newColor={ this.state.color } text={ this.state.text } author={ this.state.author } />
            </CardMedia>
          </CardActionArea>
          <CardActions className="card-buttons">
            <IconButton className="card-button">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet/" target="_blank"><TwitterIcon style={{ color: this.state.color }} /></a> 
            </IconButton>
            <Button id="new-quote" className="card-button" size="small" style={{ color: this.state.color }} onClick={this.handleClick}>New Quote</Button>
          </CardActions>
        </Card>
      </div>
    );
  };
};
