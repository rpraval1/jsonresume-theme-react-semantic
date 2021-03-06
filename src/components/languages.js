import React, { Component } from 'react';
import { Button, Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Languages extends Component {

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
              <Header as='h3' floated='left'>

                <Header.Content>
                  {data.language}
                  <Header.Subheader>
                    {data.fluency}
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

export default Languages;
