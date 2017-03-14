import React, { Component } from 'react';
import { Grid, Label,Icon, Container } from 'semantic-ui-react'

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
          <SectionLabel name="Website" />
          <Grid.Column width={11}>
            <Container textAlign='left'>
            <Label as='a' href={contactDetails.website} target="_blank">
              <Icon name='linkify' color="teal" />
              {contactDetails.website}
            </Label>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Contact;
