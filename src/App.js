import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from '../src/components/WestworldMap'
import Headquarters from '../src/components/Headquarters'

const HOSTSAPI = 'http://localhost:3000/hosts'
const AREASAPI = 'http://localhost:3000/areas'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hosts: [],
            areas: []
        }
    }

    componentDidMount() {
        fetch(HOSTSAPI)
            .then(res => res.json())
            .then(hosts => this.setState({
                hosts: hosts
            }
            // , () => console.log(this.state.hosts)
            )
        )

        fetch(AREASAPI)
            .then(res => res.json())
            .then(areas => this.setState({
                areas: areas
            }
            // , () => console.log(this.state.areas)
            )
        )
    }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
            areas={this.state.areas}
            hosts={this.state.hosts}/>
        <Headquarters
            areas={this.state.areas}
            hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
