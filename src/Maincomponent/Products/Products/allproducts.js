import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './productstable'
import Editmodal from './editmodal'
export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          editshow:false,
          idtoedit:"",
          valueOfIdToEdit:"",
          infoshow:false,
          catlist:"",
          subcatlist:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://52.90.213.211:5000/product/'+activePage)
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
        fetch('http://52.90.213.211:5000/product/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });



  }
 adddeliverywithserver = (deliver,payment,message) => {
   let res=[]
   let idtodelivery=this.state.idtodelivery
   alert(idtodelivery)
    this.setState({show:false})
    fetch('http://52.90.213.211:5000/sales/changesales/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idtoedit:this.state.idtoedit,
        delivr:deliver,
        paym:payment,
        mess:message
      }),
    })
    .then((response)=> response.json())
    .then((responseJson) => {
        console.log(responseJson)
     })
    .catch((err)=> console.log(err))
    this.state.response.forEach((element) => {
       if (element.sale_id != this.state.idtodelivery) {

             res.push(element)
       }
       else {
         JSON.parse(element.payment_status)[0].status=payment
         JSON.parse(element.delivery_status)[0].status=deliver
         console.log(element)
         res.push(element)
       }

 })
 this.setState({response:res})
 }

  itemedit = (id) => {
      this.setState({editshow:true, idtoedit:id})
      fetch('http://52.90.213.211:5000/product/subcatlist', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   idtoedit:1,
        }),
      })
      .then((response)=> response.json())
      .then((responseJson) => {
          this.setState({subcatlist:responseJson})
       })
       fetch('http://52.90.213.211:5000/product/catlist/', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           idtoedit:1,

         }),
        })
       .then((response)=> response.json())
       .then((responseJson) => {
             this.setState({catlist:responseJson})
        })

        this.state.response.forEach((element) => {
           if (element.product_id = id) {
                 this.setState({valueOfIdToEdit:element})
           }

  })
}
  handleDelete = (id) => {
      let res=[]
      alert(id)
      fetch('http://52.90.213.211:5000/product/deleteproduct/', {
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
          if (element.product_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }

showinfo = (id) => {
  alert(id)
  this.setState({infoshow:true})
}


  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
        viewinfo={(id)=>this.showinfo(id)}
         data={this.state.response} edititem={(id)=> this.itemedit(id)}
            delete={(id)=>this.handleDelete(id)} /> : "waiting"}
          {this.state.editshow? <Editmodal vl={this.state.valueOfIdToEdit} cl={this.state.catlist} sl={this.state.subcatlist} hideditmodal = {()=> this.setState({editshow:false})}

            />:null}

    </div>
    )
}
}
