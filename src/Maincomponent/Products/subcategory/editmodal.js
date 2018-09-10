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
      let co=[]
      let categoryop = this.props.data
      if (categoryop)  {
        categoryop.forEach((item,index) => {

              co.push({key:item.category_id,value:item.category_name,text:item.category_name})
        })
      }

       return (
           <Modal show={this.state.show} onHide={() => this.props.hideditmodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Edit Category</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Input label="Sub Category name"  placeholder='Sub Category name'
                    onChange={(event)=>this.setState({categoryName:event.target.value})}
                />

               <Form.Select label="Category"  placeholder='Category' options={co}
               onChange={(event)=>console.log(event.target)}
                />
                <Form.Input  onChange={this.handleFileupload} type="file" label="Baner" placeholder='Category Banner'

                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hideditmodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.editcategoryserver(this.state.categoryName,this.state.categoryDescription, this.state.categoryBanner)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
