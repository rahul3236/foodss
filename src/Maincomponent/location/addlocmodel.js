import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            value:""
        }
    }



    render() {
       return (
           <Modal show={this.state.show} onHide={() => this.props.hide()}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Location</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
                  <Form.Field required>
                  <label>Last name</label>
                  <Input placeholder='Location' value={this.state.value} onChange={(event)=> this.setState({value:event.target.value})}/>
                  </Form.Field>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hide()}>Close</Button>
                 <Button onClick={()=>
                   this.props.addlocationserver(this.state.value)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
