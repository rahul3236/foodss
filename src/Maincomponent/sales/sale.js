import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './salestable'
import Salemodal from './salemodal'
import Invoicemodal from './invoicemodal'
export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          show:false,
          idtodelivery:"",
          invoiceshow:false,
          invoicedata:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://18.234.207.58:5000/sales/'+activePage)
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
        fetch('http://18.234.207.58:5000/sales/')
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
    fetch('http://18.234.207.58:5000/sales/changesales/', {
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

  handleDelivery = (id) => {
      this.setState({show:true, idtodelivery:id})
      alert(id)
  }
  handleDelete = (id) => {
      let res=[]
      alert(id)
      fetch('http://18.234.207.58:5000/sales/deletesales/', {
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
          if (element.sale_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }

showinvoice = (id) => {
  alert(id)
  let res=[]
  this.state.response.forEach((element) => {
     if (element.sale_id == id) {
           res.push(element)
     }
  this.setState({invoiceshow:true, invoicedata:res})
})
}


  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
        showinv={(id)=>this.showinvoice(id)}
         data={this.state.response} deliverystatus={(id)=> this.handleDelivery(id)}
            delete={(id)=>this.handleDelete(id)} /> : "waiting"}
            {this.state.show?<Salemodal hidemodal={()=>this.setState({show:false})}
            adddeliveryserver={(deliver,payment,message)=>this.adddeliverywithserver(deliver, payment,message)}/> : null }
            {this.state.invoiceshow?<Invoicemodal data={this.state.invoicedata} hidemodal={()=>this.setState({invoiceshow:false})}/> :null}
    </div>
    )
}
}
