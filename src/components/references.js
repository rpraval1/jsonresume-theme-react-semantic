import React, { Component } from 'react';
import { Button, Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class References extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {


      return (
        <Item key={data.language}>
          <Item.Content>
            <Item.Header>
              <Header as='h2' floated='left'>
                <Icon name='star' color='teal' />
                <Header.Content>
                  {data.name}
                  <Header.Subheader>
                    {data.reference}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Item.Header>
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

export default References;
