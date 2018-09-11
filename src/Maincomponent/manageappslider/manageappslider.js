import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Appslidertable from './categorytable'
import axios from 'axios'
import Addmodal from './addmodal'
import Editmodal from './editmodal'
export default class Dashboard extends Component {
  state = {
      name:"",
      idtoedit:"",
      img:"",
      active:1,
      addmodal:false,
      showmodal:false,
      data:false,
      response:""

    }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://18.191.229.163:5000/manageapp/'+activePage)
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
    console.log("COmponent mounting")
        fetch('http://18.191.229.163:5000/manageapp/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });



  }


  addcategory = () => {
    alert("inside add")
      this.setState({addmodal:true})

  }

  addcategoryserver = (cn,cb) => {
      this.setState({addmodal:false})
      let data= new FormData()
      data.append('cname',cn)
     // data.append('cdescription',cd)
      data.append("img", cb)
      axios.post("http://18.191.229.163:5000/manageapp/addslider/",
      data,
      {headers:{ 'Content-Type': 'multipart/form-data'}}

    ).then((respomse) => {
        this.fetchnewresponse()
    })
    }

    fetchnewresponse= () => {
      fetch('http://18.191.229.163:5000/manageapp/')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
    console.error(error);
    });

    }

  handleEdit = (id) => {
    alert(id)
      this.setState({editmodal:true, idtoedit:id})
  }
  editcategoryserver = (cn,cb)  => {
    alert(cn)
    this.setState({editmodal:false})
    let data= new FormData()
    data.append('cname',cn)
    //data.append('cdescription',cd)
    data.append('img',cb)
    data.append("idtoedit",this.state.idtoedit)

    fetch("http://18.191.229.163:5000/manageapp/editslider/", {
      method: 'POST',
      body: data,
}).then((response) => {
  this.fetchnewresponse()
    console.log(response)
})
  }

  handleDelete = (id) => {
      let res=[]
      alert(id)
      fetch('http://18.191.229.163:5000/manageapp/deleteslider/', {
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
          if (element.slider_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }

  render() {

    return (
        <div>
        {this.state.data ? <Appslidertable activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} edit={(id)=> this.handleEdit(id)}
            delete={(id)=>this.handleDelete(id)}
          addslider = {()=>this.addcategory()}
            /> : "waiting"}
    {this.state.addmodal?<Addmodal hidemodal={()=>this.setState({addmodal:false})} show={true} addcategoryserver={(cn,cb)=>this.addcategoryserver(cn,cb)}/> :null }
    {this.state.editmodal?<Editmodal hideditmodal = {()=>this.setState({editmodal:false})} show={true} editcategoryserver={(cn,cb)=>this.editcategoryserver(cn,cb)}/> :null }
</div>
    )
}
}
