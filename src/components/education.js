import React, { Component } from 'react';
import { Button, Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Education extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {
      var endDate = " - Current"

      if(data.endDate) {
        endDate = " - " + data.endDate
      }

      return (
        <Item key={data.institution}>
          <Item.Content>

            <Item.Header>

              <Header as='h2' floated='left'>
                {data.institution}
                <Header.Subheader color="grey" >
                  {data.startDate} {endDate}
                </Header.Subheader>
              </Header>

            </Item.Header>
            <Item.Meta>
              <Header as='h4'>
                <Icon name='student' />
                <Header.Content>
                  {data.area}
                  <Header.Subheader>
                    {data.studyType}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Meta>
            <Item.Description>
               <Label as='a' tag size="mini" color='teal'>GPA: {data.gpa}</Label>

            </Item.Description>
            <Item.Extra>
              {data.courses.length > 0 ?

              <List>
                <List.Item>
                  <Header sub>Courses</Header>
                  {
                    data.courses.map(course => {
                      return (
                        <List.List key={course}>
                          <List.Item>
                            <Icon name='right triangle' />
                            <List.Content>
                              <List.Description>
                                {course}
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
    const{dataArr, name} = this.props

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

export default Education;
