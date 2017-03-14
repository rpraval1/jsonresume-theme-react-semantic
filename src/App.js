import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

import resume from '../data/resume.json'

import BasicsHeader from './components/basicheader'
import Content from './components/content'

import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }


  render() {
    console.log(resume);
    return (
      <Container fluid className="well">
        <Grid>
          <BasicsHeader basics={resume.basics} />
          <Content resume={resume} />
        </Grid>
      </Container>
    );
  }
}

export default App;
