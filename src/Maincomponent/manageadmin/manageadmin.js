import React, { Component } from 'react'
import { Dropdown,Form, Menu ,Button, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name:"",
            email:"",
            phone:"",
            address:"",
            cpassword:"",
            n1password:"",
            n2password:""
        }
    }
    componentDidMount = () => {
        fetch('http://18.234.207.58:5000/manageadmin')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({name:responseJson[0].name,
                email:responseJson[0].email,
                phone:responseJson[0].phone
        })
    })
        .catch((error) => {
          console.error(error);
        });
    }

handleDetails = () => {
    let {name,email,address, phone}  = this.state
    fetch('http://18.234.207.58:5000/manageadmin/managedetails/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
          email:email,
          phone:phone,
          address:address
        }),
      })
}

  render() {


    return (
        <Grid style={{marginRight:"1%"}}>
            <Grid.Column width={16}>
                <Header as={"h2"}>Manage Details</Header>
                <hr />
                    <Grid.Column width={16}>
                    <Segment>
                        <Form>
                            <Form.Input fluid label='Name' placeholder='Name'  required
                            value={this.state.name}
                            onChange={(event)=> this.setState({name:event.target.value})}
                            />
                            <Form.Input fluid label='Email' placeholder='Email' required
                            value={this.state.email}
                            onChange={(event)=> this.setState({email:event.target.value})}

                            />
                            <Form.Input fluid label='Phone ' placeholder='Phone'  required
                            value={this.state.phone}
                            onChange={(event)=> this.setState({phone:event.target.value})}

                            />
                            <Form.Input fluid label='Address' placeholder='Address' required
                            value={this.state.address}
                            onChange={(event)=> this.setState({address:event.target.value})}

                            />
                            <Button onClick={()=> this.handleDetails()}>Update</Button>


                        </Form>
                    </Segment>

                    </Grid.Column>


            </Grid.Column>


        <Grid.Column width={16}>

            <Header as={"h2"}>Change Password</Header>
            <hr />
            <Grid.Column width={16}>

                <Segment>
                    <Form>
                        <Form.Input fluid label='Current Password' placeholder='Current Password'  hidden
                        value={this.state.cpassword}
                        onChange={(event)=> this.setState({cpassword:event.target.value})}
                        />
                        <Form.Input fluid label='New Password' placeholder='New Password'
                        value={this.state.n1password}
                        onChange={(event)=> this.setState({n1password:event.target.value})}

                        />
                        <Form.Input fluid label='COnfirm Password' placeholder='Confirm Password'
                        value={this.state.n2password}
                        onChange={(event)=> this.setState({n2password:event.target.value})}

                        />
                        <Button>Update</Button>


                    </Form>
                </Segment>


</Grid.Column>
        </Grid.Column>
 </Grid>
    )
}
}
