import React , {Component} from 'react'
import { Button, Input, Form, Grid , Header, Table} from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
constructor (props) {
  super(props);
  this.state={
    show:true
  }
}

    render() {
      let data=this.props.data
      let sa = JSON.parse(data[0].shipping_address)
      let pc = JSON.parse(data[0].product_details)
      let totalprice=0
      Object.keys(pc).map((key) => totalprice+=pc[key].price)


       return (
           <Modal show={this.state.show} onHide={() =>this.props.hidemodal()}>
               <Modal.Header closeButton>
               <Grid>
               <Grid.Column floated="left" textAlign="left" width={6}>
              <Header as={"h2"}>Invoice</Header>
               </Grid.Column>

               <Grid.Column textAlign="right" floated="right" width={6}>
               <Header as={"h2"}>Order Id </Header>

               </Grid.Column>
                </Grid>
               </Modal.Header>
               <Modal.Body>
               <Grid>
               <Grid.Column floated="left" textAlign="left" width={8}>
               <p style={{margin:0}}><b>Shipping Address Information To:</b></p>
               <p style={{margin:0}}>{sa.firstname}</p>
               <p style={{margin:0}}>{sa.address1}</p>
               <p style={{margin:0}}>{sa.address2}</p>
               <p style={{margin:0}}>{sa.area}</p>
               <br />
               <p style={{margin:0}}>{sa.phone}</p>
               <p style={{margin:0}}>{sa.email}</p>
               <br />
               <p><b>Order date </b></p>
               <p>{data.sale_datetime}</p>
               </Grid.Column>

               <Grid.Column textAlign="right" floated="right" width={8}>
               <p><b>Biling Address information to</b></p>
               <p>{sa.phone}</p>
               <p><b>Delivery Time</b></p>
               <p>{sa.shipping_time}</p>
               </Grid.Column>
                </Grid>
                <hr />


                <Table basic='very'>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>SubTotal</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                {Object.keys(pc).map((key) =>{
                    return (
                       <Table.Row>
                      <Table.Cell>{pc[key].name}</Table.Cell>
                      <Table.Cell>{pc[key].price}</Table.Cell>
                      <Table.Cell>{pc[key].qty}</Table.Cell>
                      <Table.Cell>{pc[key].subtotal}</Table.Cell>
                      </Table.Row>
                    )
                })
              }
              <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>Total</Table.Cell>
              <Table.Cell>{totalprice}</Table.Cell>
              </Table.Row>
              </Table.Body>
              </Table>

               </Modal.Body>
               <Modal .Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 </Modal.Footer>
             </Modal>

)
}
}
