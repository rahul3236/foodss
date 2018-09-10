import React, { Component } from 'react'
import { Dropdown, Menu ,Checkbox,Container,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import SearchComponent from '../../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Grid.Column width={16} style={{marginRight: "1%",}}>
  <Container>
    <Header as='h2' dividing>
        Products
      </Header>
    </Container>
    <div style={{display:"flex", flexDirection:"column",justifyContent:"",alignContent:"flex-end"}}>
    <div style={{flex:1}}>
    <Link to="/addsale"><Button  style={{margin:0}}>Add Product</Button></Link>
    <hr />
</div>
<div style={{flex:1}}>
        <SearchComponent url="location"/>

    </div>
     </div>
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Publish</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>Later</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell><Checkbox toggle /></Table.Cell>


              <Table.Cell>
              <Button basic color="green" onClick={()=> this.props.viewinfo(item.product_id)}>Full Invoice</Button>
                <Button basic color="orange" onClick={()=>
                  this.props.edititem(item.product_id)}>Delivery Status</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.product_id)}>Delete</Button>

              </Table.Cell>
            </Table.Row>
          )
      })
      }

    </Table.Body>
    </Table>
</Grid.Column>
        <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />
 </div>
   )
  }
  else {
    return null
  }
}
}
