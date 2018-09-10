import React, { Component } from 'react'
import { Dropdown, Menu ,Container,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import SearchComponent from '../../Component/search_component'
export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Grid.Column width={16} style={{marginRight: "1%",}}>
  <Container>
    <Header as='h2' dividing>
        Sales
      </Header>
    </Container>
    <div style={{display:"flex", flexDirection:"column",justifyContent:"",alignContent:"flex-end"}}>
    <div style={{flex:1}}>
    <Link to="/addsale"><Button  style={{margin:0}}>Add Sales</Button></Link>
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
        <Table.HeaderCell>Sale Code</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>

        <Table.HeaderCell>Payment Status</Table.HeaderCell>
        <Table.HeaderCell>Delivery Status</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.sale_code}</Table.Cell>
              <Table.Cell>{JSON.parse(item.shipping_address).phone}</Table.Cell>
              <Table.Cell>{item.sale_datetime}</Table.Cell>
              <Table.Cell>{JSON.parse(item.payment_status)[0].status}</Table.Cell>
              <Table.Cell>{JSON.parse(item.delivery_status)[0].status}</Table.Cell>
              <Table.Cell>{item.payment_type}</Table.Cell>


              <Table.Cell>
              <Button basic color="green" onClick={()=> this.props.showinv(item.sale_id)}>Full Invoice</Button>
                <Button basic color="orange" onClick={()=>
                  this.props.deliverystatus(item.sale_id)}>Delivery Status</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.sale_id)}>Delete</Button>

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
