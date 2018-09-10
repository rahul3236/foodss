import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './table'
import EModal from './addlocationmodel'
import AModal from './addlocmodel'

export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          isopen:false,
          idtoedit:"",
          editshow:false,
          addshow:false
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://18.234.207.58:5000/location/'+activePage,
    {
 mode: 'cors',
 headers: {
   'Access-Control-Allow-Origin':'*'
}
 })
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
        fetch('http://18.234.207.58:5000/location')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });


  }
fetchnewresponse = () => {
  fetch('http://18.234.207.58:5000/location')
.then((response) => response.json())
.then((responseJson) => {
  console.log(responseJson)
  this.setState({data:true, response:responseJson})
})
.catch((error) => {
console.error(error);
});
}
  editwithserver = (value) => {
    fetch('http://18.234.207.58:5000/location/editlocation/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locid:this.state.idtoedit,
        value:value
      }),
    })
    .then((response)=> {
      return response.json()
      })
      .then((respomse)=> {
        console.log(respomse)
      let   editid= this.state.idtoedit
        let resp = this.state.response
        let newresponse = resp.map((item) => {
          if (item.location_id == editid ) {
          item.location_name = value
          return item
        }
        else {
          return item
        }
        })
        this.setState({editshow:false, response:newresponse})

      })
      .catch((err) => console.log(err))
  }

  handleEdit = (id) => {
      alert("inside edit")
      this.setState({editshow:true, idtoedit:id})
  }
  handleDelete = (id) => {
      let res=[]
      fetch('http://18.234.207.58:5000/location/deletelocation/', {
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
          if (element.location_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }

  addloc = () => {
    this.setState({addshow:true})
  }

addwithserver = (value) => {
  alert(value)
  fetch('http://18.234.207.58:5000/location/addlocation/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      val:value
    }),
  })
  .then((response)=> {
    return response.json()
    })
    .then((respomse)=> {
      console.log(respomse)
      this.setState({addshow:false})
      this.fetchnewresponse()

    })
    .catch((err) => console.log(err))
}
  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} edit={(id)=> this.handleEdit(id)}
            delete={(id)=>this.handleDelete(id)}
            addlocation={()=>this.addloc()}

             /> : "Waiting"}
              {this.state.editshow?<EModal hide={()=> this.setState({editshow:false})} editlocation={(value) => this.editwithserver(value)} />:null}
              {this.state.addshow?<AModal hide={()=> this.setState({addshow:false})} addlocationserver={(value) => this.addwithserver(value)} />:null}
    </div>
    )
}
}
