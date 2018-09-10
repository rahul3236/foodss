import React , {Component} from 'react'
import { Button, Input, Form, List } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
        }
    }

handleFile = (file) => {
  this.setState({categoryBanner:file})
}

    render() {
        let res = this.props.data
        console.log(res)
        console.log(this.props.data)
       return (
           <Modal show={this.state.show} onHide={() =>this.props.hideditmodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>User Detail</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <List>
                
                <List.Item>Username -> {res.username}</List.Item>
                <List.Item>surname -> {res.surname}</List.Item>
                <List.Item>email -> {res.email}</List.Item>
                <List.Item>Address 1 -> {res.address1}</List.Item>
                <List.Item>Address 2 -> {res.address2}</List.Item>
                <List.Item>City -> {res.city}</List.Item>
                <List.Item>Zip -> {res.zip}</List.Item>
                <List.Item>coupon -> {res.coupon}</List.Item>
                <List.Item>Facebook -> {res.fb_id}</List.Item>
                <List.Item>Google -> {res.g_id}</List.Item>
                <List.Item>Creation Date -> {res.creation_date}</List.Item>
                <List.Item>Reference Code -> {res.refrence_code}</List.Item>
                <List.Item>Wishlist ->  {res.wishlist}</List.Item>
                <List.Item>Mobile Verify -> {res.mobile_verify}</List.Item>
                <List.Item>User Type -> {res.user_type}</List.Item>
                </List>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hideditmodal()}>Close</Button>
               </Modal.Footer>
             </Modal>

)
}
}
