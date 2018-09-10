import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            products:"",
            categoryName:"",
            categoryDescription:"",
            categoryBanner:""
        }
    }

handleUpload = (e)  => {
  this.setState({categoryBanner:e.target.files[0]})
}

    render() {
      let co=[]
      let categoryop = this.props.data
      if (categoryop)  {
        categoryop.forEach((item,index) => {

              co.push({key:item.category_id,value:item.category_name,text:item.category_name})
        })
      }

       return (
           <Modal show={this.state.show} onHide={() =>this.props.hidemodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Category</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Input label="Sub Category "  placeholder='Sub Category'
                    onChange={(event)=>this.setState({categoryName:event.target.value})}
                />

               <Form.Select label="Category" options={co}
               onChange={(event)=>this.setState({categoryDescription:event.target.textContent})}
                />
                <Form.Input  type="file" label="Banner" placeholder='Category Banner'
              onChange={this.handleUpload}
                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.addcategoryserver(this.state.categoryName,this.state.categoryDescription, this.state.categoryBanner)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
