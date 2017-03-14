import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

class SectionLabel extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const{name} = this.props

    return (
      <Grid.Column width={5} textAlign='right'>
        <Header size='medium' color="teal">{name}</Header>
      </Grid.Column>
    )
  }

}

export default SectionLabel;
