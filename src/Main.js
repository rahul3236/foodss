import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
export default class MenuExampleVerticalDropdown extends Component {


  render() {


    return (

<BrowserRouter>
    <App/>
</BrowserRouter>
    )
}
}
