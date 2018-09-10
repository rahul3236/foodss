import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import {Switch,Link,Route} from 'react-router-dom'
import Social from './social'
import Contact from './contact'
import Terms from './terms'
export default class MenuExampleVerticalDropdown extends Component {

  render() {

    return (
      <Grid.Column width={16}>
      <Grid>
      <Grid.Column width={3} style={{marginLeft:0}}>
      <Menu fluid vertical>
          <Menu.Item className='header'><Link to="/generalsettings/socialinks">Social Links</Link></Menu.Item>
          <Menu.Item><Link to="/generalsettings/contactpage">Terms & Condition</Link></Menu.Item>
          <Menu.Item className='header'><Link to="/generalsettings/terms">Social Links</Link></Menu.Item>
          <Menu.Item><Link to="/generalsettings/contactpage">Terms & Condition</Link></Menu.Item>

          </Menu>

      </Grid.Column>
      <Grid.Column width={13}>
      <Switch>
      <Route path="/generalsettings/socialinks" component={Social} />
      <Route path="/generalsettings/contactpage" component = {Contact} />
      <Route path="/generalsettings/terms" component = {Terms} />
      </Switch>
      </Grid.Column>

      </Grid>
      </Grid.Column>

    )
}
}
