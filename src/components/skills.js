import React, { Component } from 'react';
import { Button, Message,Item, Icon, Label, Grid,Header, List, Container } from 'semantic-ui-react'

import SectionLabel from './sectionLabel';

class Skills extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  renderData(){
    const{dataArr, type} = this.props

    return dataArr.map(data => {


      return (
        <Container key={data.name} className="tagListContainer">
          <Header as="h3">
            {data.name}
            <Header.Subheader>
              {data.level}
            </Header.Subheader>
          </Header>
          <p>
            {data.keywords.map(keyword=>{
              const colors = [
                'red', 'orange', 'yellow', 'olive', 'green', 'teal',
                'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
              ]
              var color = colors[Math.floor(Math.random() * colors.length)]
              return (
                <Label key={keyword} as='a' className="tagItem" color={color} size="mini">
                  <Icon name='tag' />
                  {keyword}
                </Label>
              )
            })}
          </p>
        </Container>
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

export default Skills;
