import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            message:"",
            paymnetStatus:"",
            deliveryStatus:""
        }
    }



    render() {
      const payment=[
        {key:1, value:'Due',text:"Due"  },
        {key:2, value:"Paid", text:"Paid" }
      ]
      const delivery = [
        {key:1, value:'Pending', text:'Pending'},
        {key:2, value:'On delivery', text:"On delivery"},
        {key:3,value:'Delivered', text:'Delivered'},
        {key:4, value:'Preparing', text:'Preparing'}
      ]
       return (
           <Modal show={this.state.show} onHide={() => this.props.hidemodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Delivery Payment</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Select label="Payment Status" options={payment}
                    onChange={(event)=>this.setState({paymnetStatus:event.target.textContent})}
                />

               <Form.Select label="Delivery Status" options={delivery}
                    onChange={(event)=>this.setState({deliveryStatus:event.target.textContent})}
                />
                <Form.TextArea  label="Message"  
                    onChange={(event)=>this.setState({message:event.target.value})}
                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.adddeliveryserver(this.state.deliveryStatus,this.state.paymnetStatus, this.state.message)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
