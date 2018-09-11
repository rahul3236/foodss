import React, { Component } from 'react'
import {Button, Dropdown, Form,Menu , Grid,Segment  ,Input,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
 constructor(props) {
     super(props)
         this.state= {
             firstName:"",
             lastName:"",
             address:"",
             addressLine:"",
             mobile:"",
             product:[],
             quantity:[],
             products:""
         }
     }
    componentDidMount = () => {
      fetch('http://54.243.2.74:5000/productlist')
      .then((response) => response.json())
      .then ((responseJson) => this.setState({products:responseJson}))
      .catch((err) => console.log("Error Occured"))
    }

  render() {
    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
      ]

    return (

            <Grid.Column width={16} style={{marginRight: "1%"}} >

                <Segment raised>
                <Header as={"h2"}>Add Sale</Header>

                </Segment>




                <Segment>
                <Form>
                    <Form.Input fluid label='First name' placeholder='First name' error required
                    value={this.state.firstName}
                    onChange={(event)=>this.setState({firstName:event.target.value})}
                    />
                    <Form.Input fluid label='Last name' placeholder='First name' error
                    value={this.state.lastName}
                    onChange={(event)=>this.setState({lastName:event.target.value})}
                     />
                    <Form.Input fluid label='Address' placeholder='First name' error
                    value={this.state.address}
                    onChange={(event)=>this.setState({address:event.target.value})}
                    />
                    <Form.Input fluid label='Address Line No' placeholder='First name' error
                    value={this.state.addressLine}
                    onChange={(event)=>this.setState({addressLine:event.target.value})}
                    />
                    <Form.Input fluid label='Mobile' placeholder='First name' error
                    value={this.state.mobile}
                    onChange={(event)=>this.setState({mobile:event.target.value})}
                    />
                    <Form.Select label="Product" options={this.state.products} placeholder='Product' error
                    onChange={(event)=>alert(event.target.value)}
                    />
                    <Form.Input fluid label='Quantity' placeholder='Quantity' error
                    onChange={(event)=>this.setState({quantity:event.target.value})}
                    />
                    <Button light onClick={()=> console.log(this.state)}>SUbmit</Button>
                    </Form>


                </Segment>

                </Grid.Column>

    )
}
}
