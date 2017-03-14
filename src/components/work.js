import React, { Component } from 'react';
import { Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Work extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderWork(){
    const{workArr} = this.props

    return workArr.map(work => {
      var endDate = " - Current"
      if(work.endDate) {
        endDate = " - " + work.endDate
      }
      return (
        <Item key={work.company}>
          <Item.Content>

            <Item.Header>

              <Header as='h2' floated='left'>
                {work.company}
                <Header.Subheader color="grey" >
                  {work.startDate} {endDate}
                  <Header as='h6' floated='right' color="grey" >
                    <Label as='a' href={work.website} target="_blank" size="mini">
                      <Icon name='linkify' color="teal" />
                      {work.website}
                    </Label>
                  </Header>
                </Header.Subheader>
              </Header>
            </Item.Header>
            <Item.Meta>
              <Header as='h4'>
                {work.position}
              </Header>
            </Item.Meta>
            <Item.Description>
              {work.summary}
            </Item.Description>
            <Item.Extra>
              {work.highlights.length > 0 ?

              <List>
                <List.Item>
                  <Header sub>Highlights</Header>
                  {
                    work.highlights.map(highlight => {
                      return (
                        <List.List key={highlight}>
                          <List.Item>
                            <Icon name='right triangle' />
                            <List.Content>
                              <List.Description>
                                {highlight}
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      )
                    })
                  }
                </List.Item>
              </List>
              : '' }
            </Item.Extra>

          </Item.Content>
        </Item>
      )
    })
  }

  render() {
    const{workArr} = this.props

    if(!workArr) return (
      <Container></Container>
    )

    return (
      <Grid>
        <Grid.Row>
          <SectionLabel name="Work" />
          <Grid.Column width={11}>
            <Container textAlign='left'>
              <Item.Group>
                {this.renderWork()}
              </Item.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Work;
