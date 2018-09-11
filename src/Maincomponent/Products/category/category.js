import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './categorytable.js'
import Categorymodal from './categorymodel'
import Editmodal from './editmodal'
import axios from 'axios';
export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          addmodal:false,
          editmodal:false,
          idtoedit:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://54.243.2.74:5000/category/'+activePage)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson , activePage:activePage})
    })
    .catch((error) => {
      console.error(error);
    });

}
fetchnewresponse= () => {
  fetch('http://54.243.2.74:5000/category/')
.then((response) => response.json())
.then((responseJson) => {
  console.log(responseJson)
  this.setState({data:true, response:responseJson})
})
.catch((error) => {
console.error(error);
});

}
    componentDidMount = () => {
    console.log("COmponent mounting")
        fetch('http://54.243.2.74:5000/category/')
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

  addcategoryserver = (cn, cd,cb) => {
      this.setState({addmodal:false})
      alert(cb)
      let data= new FormData()
      data.append('cn',cn)
      data.append('cd',cd)
      data.append("img", cb)
      axios.post("http://54.243.2.74:5000/category/addcategory/",
      data,
      {headers:{ 'Content-Type': 'multipart/form-data'}}

    )
    .then(()=>this.fetchnewresponse())
    }

  handleEdit = (id) => {
      alert("inside edit")
      this.setState({editmodal:true, idtoedit:id})
  }
  editcategoryserver = (cn,cd,cb)  => {
      this.setState({editmodal:false})
      alert(cb)
    let data= new FormData()
    data.append('cn',cn)
    data.append('cd',cd)
    data.append("img", cb)
    data.append("idtoedit",this.state.idtoedit)
    axios.post("http://54.243.2.74:5000/category/edit/",
    data,
    {headers:{ 'Content-Type': 'multipart/form-data'}}

  )
  .then(()=>this.fetchnewresponse())
  }

  handleDelete = (id) => {
      let res=[]
      fetch('http://54.243.2.74:5000/category/delete/', {
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
          if (element.category_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }



  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} edit={(id)=> this.handleEdit(id)}
            delete={(id)=>this.handleDelete(id)}
          addcategor = {()=>this.addcategory()}
            /> : "waiting"}
    {this.state.addmodal?<Categorymodal hidemodal={()=>this.setState({addmodal:false})} show={true} addcategoryserver={(cn,cd,cb)=>this.addcategoryserver(cn,cd,cb)}/> :null }
    {this.state.editmodal?<Editmodal hideditmodal = {()=>this.setState({editmodal:false})} show={true} editcategoryserver={(cn,cd,cb)=>this.editcategoryserver(cn,cd,cb)}/> :null }

    </div>

    )
}
}
