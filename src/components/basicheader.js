import React, { Component } from 'react';
import { Grid, Header,Segment } from 'semantic-ui-react'

class BasicsHeader extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    const {basics} = this.props

    return (
      <Grid.Row className="well">
        <Header as='h1' attached='top' textAlign='center' className="basicsName no_bg">
          {basics.name}
        </Header>
        <Segment attached textAlign='center' className="positionLabel no_bg no_border">
          {basics.label}
        </Segment>
      </Grid.Row>
    );
  }

}


export default BasicsHeader;
