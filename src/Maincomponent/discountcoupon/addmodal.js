import React , {Component} from 'react'
import { Button, Input, Form ,Label} from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            title:"",
            code:"",
            valid:"",
            discount_type:"",
            discount_value:"",
            minimum_amount:"",
            file:""
        }
    }

    handleFileupload = (e) => {
      this.setState({file:e.target.files[0]})
    }

    render() {
      const op=[
        {key:1, value:"Percent", text:"Percent"},
        {key:2, value:"Amount", text:"Amount"}
      ]

       return (
           <Modal show={this.state.show} onHide={() => this.props.hideadd()}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Coupon</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Field inline>
                <label>Coupon Title</label>
                <Input  onChange={(e)=> this.setState({title:e.target.value})}/>
                </Form.Field>
               <Form.Field inline>
                <label>Coupon Code</label>
                <Input  onChange={(e)=> this.setState({code:e.target.value})}/>
                </Form.Field>


               <Form.Field inline>
                <label>Valid till</label>
                <Input onChange={(e)=> this.setState({valid:e.target.value})}/>
                </Form.Field>


               <Form.Select inline label="Discount Type" options={op} placeholder="choose one" onChange={(e)=> this.setState({discount_type:e.target.textContent})}/>
               <Form.Field inline>
                 <label>Discount Value</label>
               <Input labelPosition='right' type='text' placeholder='Amount'>
               <Label basic>$</Label>
               <input onChange={(e)=> this.setState({discount_value:e.target.value})}/>
               <Label>.00</Label>
               </Input>
               </Form.Field>
               <Form.Field inline>
                 <label>Minimum Amount</label>
               <Input labelPosition='right' type='text' placeholder='Amount'>
               <Label basic>$</Label>
               <input onChange={(e)=> this.setState({minimum_amount:e.target.value})}/>
               <Label>.00</Label>
               </Input>
               </Form.Field>
                <Form.Input onChange={this.handleFileupload} type="file" label="Image"
                />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hideadd()}>Close</Button>
                 <Button onClick={()=>this.props.addwserver(this.state.title,this.state.code,this.state.value, this.state.discount_type, this.state.discount_value, this.state.minimum_amount,this.state.file)}
                  >Save</Button>
               </Modal.Footer>
             </Modal>

)

}

}
