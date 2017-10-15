import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
      return (
        <div>
          <Jumbotron>
            <h1>Welcome!</h1> 
            <p>
              This is Roger's rate exchange center.Please click{' '}
              <Link to='/ratelist'>here</Link> {' '}
              to start.
            </p>
          </Jumbotron>
        </div>
      );
    }
  }