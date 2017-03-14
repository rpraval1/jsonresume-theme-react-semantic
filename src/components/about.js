import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class About extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const{summary} = this.props

    return (
      <Grid>
        <Grid.Row>
          <SectionLabel name="About" />
          <Grid.Column width={11}>
            <Container textAlign='justified'>
              <p>
                {summary}
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default About;
