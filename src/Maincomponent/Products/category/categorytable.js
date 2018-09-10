import React, { Component } from 'react'
import { Dropdown,Image, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import SearchComponent from '../../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <Grid.Column width={16} style={{marginRight:"1%"}}>
    <Header as={"h2"}>Category</Header>
  <hr />
  <div style={{display:"flex", flexDirection:"column",justifyContent:"",alignContent:"flex-end"}}>
  <div style={{flex:1}}>
  <Button  onClick={()=>this.props.addcategor()}style={{margin:0}}>Add Sales</Button>
  <hr />
</div>
<div style={{flex:1}}>
      <SearchComponent url="location"/>

  </div>
   </div>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Banner</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.category_name}</Table.Cell>
              <Table.Cell><Image size="tiny"  src="https://fooderia.in/uploads/category_image/category_37.jpg?random=1536191236579" /></Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.category_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.category_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }
    </Table.Body>
    </Table>

        <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />

</Grid.Column>

   )
  }
  else {
    return null
  }
}
}
