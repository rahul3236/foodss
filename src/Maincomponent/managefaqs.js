import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header,Button, Label,  Table, Form, Input, Icon} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {

constructor(props) {
  super(props) ;
  this.state = {
    count:[1],
    quesion:["","","","","","",""],
    answer:["","","","","","",""],
    renderagain:true,
    tempQ:"",
    tempA:"",
    q2c:""
  }
}
renderItems = () => {
  //let a="";
  return this.state.count.map((item, index) => {
    return (
      <Segment attached>
      <Grid>

      <Grid.Column width="4">
        <Form.Input placeholder="question" onChange={(e)=> this.setState({q2c:index,tempQ:e.target.value})}  style={{width:"100%"}} placeholder="Question" />
      </Grid.Column>
      <Grid.Column width={8}>
      <Form.TextArea onChange={(e)=>this.setState({q2c:index,tempA:e.target.value})} autoHeight style={{width:"100%", minHeight:100}} placeholder="Answer" />
      </Grid.Column>

      <Grid.Column width={4}>
      <Button light onClick={()=> this.deleteitem(index)}><Icon name="delete" style={{color:"red"}}/>Delete</Button>
        <Button light onClick={()=> this.saveitem(index)}><Icon name="save" style={{color:"green",marginLeft:"10px"}}/>Save</Button>
      </Grid.Column>

      </Grid>

      </Segment>
    )
    //return a
  })
}
saveitem = (index) => {
  let tQ=this.state.quesion
  let tA=this.state.answer
  tQ.splice(index,0,this.state.tempQ)
  tA.splice(index,0,this.state.tempA)
  this.setState({quesion:tQ,answer:tA})

}



additem = () => {
  let cb=this.state.count
  cb.push(1)

  this.setState({count:cb})
}
deleteitem = (index) => {
  let cb=this.state.count
  cb.splice(index,1)
  this.setState({count:cb, renderagain:true})
}
  render() {


    return (
        <Grid style={{marginRight:"1%"}}>
        <Grid.Column textAlign="center" width={16}>
        <Header as={"h2"} style={{width:"100%"}}>Manage FAQS</Header>

        </Grid.Column>
        <Grid.Column width={16}>
        <Segment style={{width:"100%"}} attached>FAQS</Segment>
        {this.state.renderagain?this.renderItems():null}
        <Button onClick={this.additem} style={{marginTop:"1%"}}>Add More FAQS</Button>
        </Grid.Column>
        </Grid>
      )
}
}
