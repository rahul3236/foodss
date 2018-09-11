import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Editmodal from './editmodal'
import Tablec from './discounttable'
import Addmodal from './addmodal'
import axios from 'axios'

export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          idtoedit:"",
          editshow:false,
          addshow:false,
          itemtoedit:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://54.243.2.74:5000/discountcoupon/'+activePage)
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
        fetch('http://54.243.2.74:5000/discountcoupon/')
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
    fetch('http://54.243.2.74:5000/discountcoupon/')
.then((response) => response.json())
.then((responseJson) => {
    console.log(responseJson)
    this.setState({data:true, response:responseJson})
})
.catch((error) => {
  console.error(error);
});
  }

  addwithserver = (t,c,v,dt,dv,ma,cb) => {
    this.setState({addshow:false})
    let data= new FormData()
    data.append('title',t)
    data.append('code',c)
    data.append("valid", v)
    data.append('dt',dt)
    data.append('dv',dv)
    data.append('ma',ma)
    data.append('idtoedit',this.state.idtoedit)
    data.append('img',cb)
    axios.post("http://54.243.2.74:5000/discountcoupon/addcoupon/",
    data,
    {headers:{ 'Content-Type': 'multipart/form-data'}}

  )
  .then(()=>this.fetchnewresponse())
  }

  handleAdd = () => {
    alert("nwek")
    this.setState({addshow:true})
  }
  editwithserver = (t,c,v,dt,dv,ma,cb) => {
      this.setState({editshow:false})
      this.setState({editmodal:false})
      let data= new FormData()
      data.append('title',t)
      data.append('code',c)
      data.append("valid", v)
      data.append('dt',dt)
      data.append('dv',dv)
      data.append('ma',ma)
      data.append('idtoedit',this.state.idtoedit)
      data.append('img',cb)
      axios.post("http://54.243.2.74:5000/discountcoupon/editcoupon/",
      data,
      {headers:{ 'Content-Type': 'multipart/form-data'}}

    ).then(()=>this.fetchnewresponse)
    }


  handleEdit = (id) => {
    let res=[]
      alert("inside edit")
      this.setState({editshow:true, idtoedit:id})
      this.state.response.map((item) => {
        if (item.coupon_id == id) {
          res.push(item)
        }
      })
      this.setState({itemtoedit:res})
  }
  handleDelete = (id) => {
      let res=[]
      fetch('http://54.243.2.74:5000/sales/deletesales/', {
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



  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} edit={(id)=> this.handleEdit(id)}
            delete={(id)=>this.handleDelete(id)}
            add = {()=> this.handleAdd()}
            /> : "waiting"}
            {this.state.editshow?<Editmodal data={this.state.itemtoedit} hidedit={()=> this.setState({editshow:false})}
            editwserver= {(t,c,v,dt,dv,ma,cb)=>this.editwithserver(t,c,v,dt,dv,ma,cb)} /> :null }
            {this.state.addshow?<Addmodal  hideadd={()=> this.setState({addshow:false})}
            addwserver= {(t,c,v,dt,dv,ma,cb)=>this.addwithserver(t,c,v,dt,dv,ma,cb)} /> :null }
    </div>
    )
}
}
