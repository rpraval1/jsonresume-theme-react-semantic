import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Contact extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const{contactDetails} = this.props

    return (
      <Grid>
        <Grid.Row>
          <SectionLabel name="Contact" />
          <Grid.Column width={11}>
            <Container textAlign='left'>
              <Header sub>Email</Header>
              <span>{contactDetails.email}</span>
              <Header sub>Phone</Header>
              <span>{contactDetails.phone}</span>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Contact;
