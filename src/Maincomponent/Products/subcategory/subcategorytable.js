import React, { Component } from 'react'
import { Image,Dropdown, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import SearchComponent from '../../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Grid.Column width={16} style={{marginRight:"1%"}}>
    <Header as={"h2"}>Sub Category</Header>
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
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Brand</Table.HeaderCell>
        <Table.HeaderCell>Banner</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.sub_category_name}</Table.Cell>
              <Table.Cell>dummy</Table.Cell>
              <Table.Cell>{item.brand}</Table.Cell>
              <Table.Cell><Image size="tiny" src="https://fooderia.in/uploads/sub_category_image/sub_category_96.jpg?random=1536192303196" /></Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.sub_category_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.sub_category_id)}>Delete</Button>
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
