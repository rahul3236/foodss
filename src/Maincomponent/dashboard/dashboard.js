import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import {AreaChart, BarChart} from 'react-easy-chart';


export default class Dashboard extends Component {


  render() {


    return (
        <div>
           <Grid> 
    <Grid.Column width={4}>
    <BarChart
    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
    axes
    colorBars
    height={250}
    width={650}
    barWidth={20}
    xType={'time'}
    xDomainRange={['5-Jan-15', '10-Jan-15']}
    yDomainRange={[5, 50]}
    data={[
      { x: '10-Jan-15', y: 20 },
      { x: '12-Jan-15', y: 10 },
      { x: '15-Jan-15', y: 33 }
    ]}
  />
            </Grid.Column>
            <Grid.Column width={16}>
            <AreaChart
    axes
    margin={{top: 10, right: 10, bottom: 50, left: 50}}
    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
    width={250}
    interpolate={'cardinal'}
    height={250}
    data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]}
  />
            </Grid.Column>
 </Grid>
</div>
    )
}
}