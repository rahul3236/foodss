import React, { Component } from 'react'
import { Dropdown, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import SearchComponent from '../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (

  <Grid>
    <Grid.Column width={16} style={{marginRight:"1%"}}>
      <Header as={"h2"}>Location</Header>

      <div style={{display:"flex", flexDirection:"column",justifyContent:"",alignContent:"flex-end"}}>
      <div style={{flex:1}}>
      <Button  onClick={()=>this.props.addlocation()}style={{margin:0}}>Add Sales</Button>
      <hr />
    </div>
    <div style={{flex:1}}>
          <SearchComponent url="location"/>

      </div>
       </div>
  <Table celled style={{marginTop:0}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>OPtions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.location_name}</Table.Cell>
              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.location_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.location_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }


    </Table.Body>


  </Table>
 </Grid.Column>
 <Grid.Column width={16} style={{marginTop:0}}>

<Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />

</Grid.Column>
 </Grid>


   )
  }
  else {
    return null
  }
}
}
