import React, { Component } from 'react'
import TableHeaderCell, {Container, Dropdown, Image, Menu, Button, Pagination, Grid, Segment, Header, Icon, Label, Table } from 'semantic-ui-react'
import SearchComponent from '../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Grid.Column width={13} style={{marginRight:"1%"}}>
  <Container>
    <Header as='h2' dividing>
        Customer
      </Header>
    </Container>
    <SearchComponent url="location"/>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Usename</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>

        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>profile_image</Table.HeaderCell>
        <Table.HeaderCell>Facebook Id</Table.HeaderCell>
        <Table.HeaderCell>Google Id</Table.HeaderCell>

        <Table.HeaderCell>Options</Table.HeaderCell>

        </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.user_id}</Table.Cell>

              <Table.Cell>{item.email}</Table.Cell>

              <Table.Cell>{item.phone}</Table.Cell>

              <Table.Cell><Image size="small"  src={item.slider_image} /></Table.Cell>

              <Table.Cell>{item.fb_id}</Table.Cell>


              <Table.Cell>{item.g_id}</Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.view(item.user_id)}>Full Info</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.user_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }


    </Table.Body>
    </Table>
    </Grid.Column>

        <Pagination style={{marginRight:"1%"}} floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />
</div>
   )
  }
  else {
    return null
  }
}
}
