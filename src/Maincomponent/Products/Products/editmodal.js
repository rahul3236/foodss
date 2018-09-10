import React , {Component} from 'react'
import { Button, Input, Form ,Label} from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            title:"",
            category:"",
            subcategory:"",
            categoryBanner:"",
            price:"",
            discount:"",
            message:"",
            file:""
        }
    }

    handleFileupload = (e) => {
      this.setState({categoryBanner:e.target.files[0]})
    }

    render() {
      let co=[]
      let so=[]
      let vl=this.props.vl
      let categoryop = this.props.cl
      let subop = this.props.sl
      if (categoryop && subop)  {
        categoryop.forEach((item,index) => {

              co.push({key:index,value:item.category_name,text:item.category_name})
        })
        subop.forEach((item,index) => {

              so.push({key:index,value:item.sub_category_name,text:item.sub_category_name})
        })
        console.log(co)
       return (
           <Modal show={this.state.show} onHide={() => this.props.hideditmodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Edit Product</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Field inline>
                <label>Product Title</label>
                <Input value={vl.title}/>
                </Form.Field>
               <Form.Select inline label="Category" options={co} placeholder="choose one"/>
               <Form.Select inline label="Sub-Category" options={so} placeholder="choose one"/>
               <Form.Field inline>
                 <label>Sale Price</label>
               <Input labelPosition='right' type='text' placeholder='Amount' value={vl.sale_price}>
               <Label basic>$</Label>
               <input />
               <Label>.00</Label>
               </Input>
               </Form.Field>
               <Form.Field inline>
                 <label>Product Discount</label>
               <Input labelPosition='right' type='text' placeholder='Amount' value={vl.discount}>
               <Label basic>$</Label>
               <input />
               <Label>.00</Label>
               </Input>
               </Form.Field>
               <Form.Field inline>
                <label>Tags</label>
                <Input value={vl.tag}/>
                </Form.Field>
                <Form.Input onChange={this.handleFileupload} type="file" label="Image"
                />
                  <Form.TextArea  label="Message"
                    onChange={(event)=>this.setState({message:event.target.value})}
                  />


                  </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hideditmodal()}>Close</Button>
                 <Button
                  >Save</Button>
               </Modal.Footer>
             </Modal>

)
}
else {
  return (<p>Loading</p>)
}
}
}
