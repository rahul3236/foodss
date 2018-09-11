import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import { BrowserRouter, Route,Switch,Link } from 'react-router-dom';
import Homesettings from './Maincomponent/frontend/homesettings'
import Contactpage from './Maincomponent/frontend/contact'

import Product from './Maincomponent/Products/Products/allproducts'
import Customer from './Maincomponent/customer/customer'
import Topc from './Component/topcomponent'
import Sidebar from './Component/sidebar'
import Addsale  from './Maincomponent/addsales'
import Sale from './Maincomponent/sales/sale'
import Location from './Maincomponent/location/location'
import Category from './Maincomponent/Products/category/category'
import Subcategory from './Maincomponent/Products/subcategory/subcategory'
import Dashboard from './Maincomponent/dashboard/dashboard'
import Addoffer from './Maincomponent/addoffer/addoffer'
import Discountcoupon from './Maincomponent/discountcoupon/discountcoupon'
import Manageadmin from './Maincomponent/manageadmin/manageadmin'
import Manageappslider from './Maincomponent/manageappslider/manageappslider'
import Userfeedback from './Maincomponent/userfeedback/userfeedback'
import Managefaqs from './Maincomponent/managefaqs'
import GeneralSettings from './Maincomponent/sitesettings/generalsettings'

export default class App extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Topc />
        </Grid.Column>
          <Grid.Column  width={3} >
            <Sidebar />
        </Grid.Column>
        <Grid.Column width={13}>



      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/sales" component={Sale} />
      <Route path="/category" component={Category} />
      <Route path="/subcategory" component={Subcategory} />
      <Route path="/location" component={Location} />
      <Route path="/manageadmin" component={Manageadmin} />
      <Route path="/manageapp" component={Manageappslider} />
      <Route path="/addsale" component={Addsale} />
      <Route path="/addoffer" component={Addoffer} />
      <Route path="/discount" component={Discountcoupon} />
      <Route path="/userfeedback" component={Userfeedback} />
      <Route path="/customer" component={Customer} />
      <Route path="/product" component={Product} />
      <Route path="/managefaqs" component={Managefaqs} />
      <Route  path="/generalsettings" component={GeneralSettings}  />
      <Route path="/homesettings" component={Homesettings} />
      <Route path="/contactpage" component={Contactpage} />
       </Switch>
    </Grid.Column>
</Grid>
    )
  }
}
