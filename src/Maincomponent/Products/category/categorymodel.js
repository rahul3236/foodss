import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            categoryName:"",
            categoryDescription:"",
            categoryBanner:""
        }
    }
handleFileupload = (e) => {
  this.setState({categoryBanner:e.target.files[0]})
}


    render() {
       return (
           <Modal show={this.state.show} onHide={() =>this.props.hidemodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Category</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Input label="Category name"  placeholder='Category name'
                    onChange={(event)=>this.setState({categoryName:event.target.value})}
                />

               <Form.Input label="Category Description"  placeholder='Category Description'
               onChange={(event)=>this.setState({categoryDescription:event.target.value})}
                />
                <Form.Input onChange={this.handleFileupload} type="file" label="Message" placeholder='Category Banner'

                    />
                </Form>
               </Modal.Body>
               <Modal .Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.addcategoryserver(this.state.categoryName,this.state.categoryDescription, this.state.categoryBanner)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
