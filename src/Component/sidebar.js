import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

<Menu inverted vertical style={{width:"100%"}}>
        <Link to="/">
        <Menu.Item
          name='Dashboard'
          active={activeItem === 'Dashboard'}
          onClick={this.handleItemClick}
        />
        </Link>

        <Dropdown item text='Products' active={true}>
          <Dropdown.Menu style={{backgroundColor:"black"}}>
          <Dropdown.Header><Link to="/category"><p style={{color:"white"}}>Category</p></Link></Dropdown.Header>
            <Dropdown.Header><Link to="/subcategory"><p style={{color:"white"}}>Sub-Category</p></Link></Dropdown.Header>
              <Dropdown.Header><Link to="/product"><p style={{color:"white"}}>Sub-Category</p></Link></Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/sales">
        <Menu.Item
          name='Sales'
          active={activeItem === 'Sales'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/customer">
        <Menu.Item
          name='Customer'
          active={activeItem === 'Customer'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="Discount">
        <Menu.Item
          name='Discount Coupon'
          active={activeItem === 'Discount Coupon'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/location">
        <Menu.Item
          name='Location'
          active={activeItem === 'Location'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Dropdown item text='Business Settings' active={true}>
          <Dropdown.Menu style={{backgroundColor:"black"}}>
          <Dropdown.Header><Link to="/managefaqs"><p style={{color:"white"}}>Manage FAQS</p></Link></Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/manageadmin">
        <Menu.Item
          name='Manage Admin Profile'
          active={activeItem === 'Manage Admin Profile'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/manageapp">
        <Menu.Item
          name='Manage App Slider'
          active={activeItem === 'Manage App Slider'}
          onClick={this.handleItemClick}
        />
        </Link>

        <Link to="/userfeedback">
        <Menu.Item
          name='User Feedback'
          active={activeItem === 'User Feedback'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/addoffer">
        <Menu.Item
          name='Add Offer'
          active={activeItem === 'Add Offer'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    )
}
}
