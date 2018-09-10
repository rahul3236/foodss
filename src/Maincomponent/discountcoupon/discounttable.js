import React, { Component } from 'react'
import { Dropdown, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import SearchComponent from '../../Component/search_component'


export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Header as={"h2"}>Location</Header>



<div style={{display:"flex", flexDirection:"column",justifyContent:"",alignContent:"flex-end"}}>
<div style={{flex:1}}>
<Button  onClick={()=> this.props.add()} style={{margin:0}}>Add Sales</Button>
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
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Code</Table.HeaderCell>
        <Table.HeaderCell>Added By</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.code}</Table.Cell>
              <Table.Cell>{JSON.parse(item.added_by).type}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.coupon_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.coupon_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }
    </Table.Body>

  </Table>

          <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />
</div>
   )
  }
  else {
    return null
  }
}
}
