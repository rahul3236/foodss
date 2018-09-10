import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,Form, Input,  Table} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class MenuExampleVerticalDropdown extends Component {

  render() {

    return (
        <Grid centered>
        <Grid.Column width={16}>
        <Header as={"h3"}>Social Links</Header>

        <hr />
        </Grid.Column>
        <Grid.Column centered width={10} >
        <Input icon='users' iconPosition='left' value={"https://facebook.com/fooderiafoodworksindia"} />
  </Grid.Column>
  <Grid.Column centered width={10} >
  <Input icon='users' iconPosition='left' value={"https://google.com/"} />
</Grid.Column>
<Grid.Column centered width={10} >
<Input icon='users' iconPosition='left' value={"https://twitter.com/"} />
</Grid.Column>
<Grid.Column centered width={10} >
<Input icon='users' iconPosition='left' value={"https://pinterest.com/"} />
</Grid.Column>
<Grid.Column centered width={10} >
<Input icon='users' iconPosition='left' value={"https://skype.com/"} />
</Grid.Column>
<Grid.Column centered width={10} >
<Input icon='users' iconPosition='left' value={"https://youtube.com/"} />
        </Grid.Column>
        </Grid>


          )
}
}
