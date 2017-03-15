import React, { Component } from 'react';
import { Button, Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Awards extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {


      return (
        <Item key={data.title}>
          <Item.Content>

            <Item.Header>

              <Header as='h3' floated='left'>
                <Icon name='trophy' color='teal' />
                <Header.Content>
                  {data.title}
                  <Header.Subheader>
                    {data.awarder}
                  </Header.Subheader>
                </Header.Content>
              </Header>

            </Item.Header>
            <Item.Meta>
              <Header as='h4'>
                <Header.Content>
                  {data.date}
                </Header.Content>
              </Header>
            </Item.Meta>
            <Item.Description>
               {data.summary}
            </Item.Description>

          </Item.Content>
        </Item>
      )
    })
  }

  render() {
    const{dataArr, name} = this.props

    if(dataArr.length == 0) return (
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

export default Awards;
