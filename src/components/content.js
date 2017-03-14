import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Contact from './contact'
import Website from './website'
import About from './about'
import Profiles from './profiles'
import DataCard from './dataCard'
import Education from './education'


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
        <DataCard dataArr={resume.work} name="Work" type="work"/>
        <DataCard dataArr={resume.volunteer} name="Volunteer" type="volunteer"/>
        <Education dataArr={resume.education} name="Education" />

      </Grid.Row>
    )
  }

}

export default Content;
