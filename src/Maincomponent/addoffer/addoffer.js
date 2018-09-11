import React, { Component } from 'react'
import { Dropdown,Container, Menu ,Form,Input,Button, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import axios from 'axios'



export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
        message:"",
        title:"",
        file:""
      }
  }

uploadToServer = () => {
alert(this.state.file)
  let data= new FormData()
  data.append('message', this.state.message)
  data.append('title',this.state.title)
  data.append("img", this.state.file)
  axios.post("http://18.191.229.163:5000/category/addcategory/",
  data,
  {headers:{ 'Content-Type': 'multipart/form-data'}}

).then((resp) => alert(resp))
}
  render() {

    return (

               <Grid.Column width={16} style={{marginRight:"1%"}}>
                 <Header as={"h2"}>Add Offer</Header>
               <Segment>
               <Form>
                   <Form.Input fluid label='Message' placeholder='Message' error required
                   value={this.state.message}
                   onChange={(event)=> this.setState({message:event.target.value})}
                  />
                   <Form.Input fluid label='Title' placeholder='Title' error
                    value={this.state.title} onChange={(event)=> this.setState({title:event.target.value})}

                    />
                   <Form.Input fluid label='Banner Image' onChange={(e)=> this.setState({file:e.target.files[0]})} type="file"
                  />

                   <Button light onClick={()=> this.uploadToServer()}>SUbmit</Button>
                   </Form>


               </Segment>

               </Grid.Column>

    )
}
}
