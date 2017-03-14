import React, { Component } from 'react';
import { Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class DataCard extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {
      var endDate = " - Current"
      var entityName = ""
      if(type == "work"){
        entityName = data.company
      } else if(type=="volunteer"){
        entityName = data.organization
      }

      if(data.endDate) {
        endDate = " - " + data.endDate
      }

      return (
        <Item key={entityName}>
          <Item.Content>

            <Item.Header>

              <Header as='h2' floated='left'>
                {entityName}
                <Label as='a' href={data.website} target="_blank" size="mini">
                  <Icon name='linkify' color="teal" />
                  {data.website}
                </Label>
                
              </Header>

            </Item.Header>
            <Item.Meta>
              <Header as='h4'>
                {data.position}
                <Header as="h6" color="grey" >
                  {data.startDate} {endDate}
                </Header>
              </Header>
            </Item.Meta>
            <Item.Description>
              {data.summary}
            </Item.Description>
            <Item.Extra>
              {data.highlights.length > 0 ?

              <List>
                <List.Item>
                  <Header sub>Highlights</Header>
                  {
                    data.highlights.map(highlight => {
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
    const{dataArr, name, type} = this.props

    if(!dataArr) return (
      <Container></Container>
    )

    return (
      <Grid>
        <Grid.Row>
          <SectionLabel name={name} />
          <Grid.Column width={11}>
            <Container textAlign='left'>
              <Item.Group>
                {this.renderData()}
              </Item.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default DataCard;
