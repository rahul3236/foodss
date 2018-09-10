import React, { Component } from 'react'
import { Dropdown, Menu,Button , Form, Input,Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  constructor(props) {
      super(props);
      this.state={
          search:"",
      }
  }
  render() {

    return (

        <Grid.Column width={16}>

        <Form method="get" action={"http://localhost:5000/"+this.props.url+"/"}>
    <Form.Group inline>
      <Form.Field floated="right">
        <Input floated="right" placeholder='Search'
        value={this.state.search} onClick={()=>this.props.search(this.state.search)}
        />
      </Form.Field>
      <Form.Field>

          <Button >

      <Icon name='refresh' />
          </Button>

          </Form.Field>
          <Form.Field>
          <form method="get" action={"http://localhost:5000/"+this.props.url+"/getpdf/"}>
          <Button> Pdf</Button>
          </form>
          </Form.Field>
      <Form.Field>
      <form method="get" action={"http://localhost:5000/"+this.props.url+"/getcsv/"}>
      <Button> csv</Button>
      </form>
      </Form.Field>

      <Form.Field>
      <form method="get" action={"http://localhost:5000/"+this.props.url+"/getxls/"}>
      <Button>xls</Button>
      </form>
            </Form.Field>
    </Form.Group>
</Form>
        </Grid.Column>

    )
}
}
