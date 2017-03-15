import React, { Component } from 'react';
import { Button, Message,Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Publications extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {


      return (
        <Message icon key={data.name}>
          <Icon name='book' size="mini"  />
          <Message.Content>
            <Message.Header>
              {data.name}

              <Header as="h5" color="grey" >
                {data.releaseDate}
                <Label as='a' href={data.website} target="_blank" size="mini">
                  <Icon name='linkify' color="teal" />
                  {data.website}
                </Label>
              </Header>


            </Message.Header>
            <Label as='a' tag size="mini" color='teal'>by: {data.publisher}</Label>
              <Container textAlign='justified'>
                <p>
                  {data.summary}
                </p>
              </Container>
          </Message.Content>
        </Message>
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
              {this.renderData()}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Publications;
