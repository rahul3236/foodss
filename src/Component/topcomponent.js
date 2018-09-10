import React, { Component } from 'react'
import { Dropdown,Grid, Menu ,Image,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import { Container, Row, Col } from 'reactstrap';
import logo from '../logo_79.png'
export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
   
          <Segment>
            <Image src={logo} size='tiny' style={{marginLeft:"2%"}}/>

          </Segment>
         
    )
}
}