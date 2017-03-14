import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Contact from './contact'
import Website from './website'
import About from './about'
import Profiles from './profiles'
import Work from './work'

class Content extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const {resume} = this.props

    return (
      <Grid.Row>
        <Contact contactDetails={resume.basics} />
        <Website contactDetails={resume.basics} />
        <About summary={resume.basics.summary} />
        <Profiles profilesArr={resume.basics.profiles} />
        <Work workArr={resume.work} />
      </Grid.Row>
    )
  }

}

export default Content;
