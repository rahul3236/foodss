import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Customertable from './customertable'
import axios from 'axios'
import Viewmodal from './viewmodal'
export default class Dashboard extends Component {
  state = {
      name:"",
      idtoedit:"",
      img:"",
      active:1,
      addmodal:false,
      showmodal:false,
      data:false,
      response:"",
      singleuserinfo:"",
      singlebool:""

    }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://52.90.213.211:5000/customer/'+activePage)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson , activePage:activePage})
    })
    .catch((error) => {
      console.error(error);
    });

}
    componentDidMount = () => {
        alert("mounting")
    console.log("COmponent mounting")
        fetch('http://52.90.213.211:5000/customer/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });



  }




  handleView = (id) => {
      alert("inside edit")


      fetch('http://52.90.213.211:5000/customer/viewinfo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locid:id
        }),
      })
      .then((response)=> response.json())
      .then((responseJson) => {
          this.setState({singlebool:true,viewmodal:true,singleuserinfo:responseJson[0]})
      })
      .catch((err)=> console.log(err))

  }

  handleDelete = (id) => {
      let res=[]
      alert(id)
      fetch('http://52.90.213.211:5000/customer/deleteuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locid:id
        }),
      })
      .then((response)=> response.json())
      .then((responseJson) => {
          console.log(responseJson)
      })
      .catch((err)=> console.log(err))
       this.state.response.forEach((element) => {
          if (element.user_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }

  render() {

    return (
        <div>
        {this.state.data ? <Customertable activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} view={(id)=> this.handleView(id)}
            delete={(id)=>this.handleDelete(id)}
            /> : "waiting"}
{this.state.viewmodal && this.state.singlebool ?<Viewmodal
data={this.state.singleuserinfo}
hideditmodal = {()=>this.setState({viewmodal:false})} show={true} />:null}

    </div>
    )
}
}
