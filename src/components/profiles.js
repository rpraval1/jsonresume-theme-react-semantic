import React, { Component } from 'react';
import { Button, Grid, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Profiles extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderProfiles(){
    const{profilesArr} = this.props

    return profilesArr.map(profile => {
      var iconName = (profile.network).toLowerCase();
      var iconCSS = iconName
      if(iconName === 'github'){
        iconCSS = 'grey'
      }
      return (
          <Button key={profile.network} as="a"
          href={profile.url}
          target="_blank" content={profile.username} color={iconCSS} icon={iconName} />

      )
    })
  }

  render() {
    const{profilesArr} = this.props

    if(!profilesArr) return (
      <Container></Container>
    )

    return (
      <Grid>
        <Grid.Row>
          <SectionLabel name="Profiles" />
          <Grid.Column width={11}>
            <Container textAlign='left'>
              {this.renderProfiles()}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Profiles;
