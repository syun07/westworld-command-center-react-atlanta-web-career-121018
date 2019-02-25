import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import Details from './Details'
import LogPanel from './LogPanel'


class Headquarters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedHost: null
        }
    }adsfasdf

    allHosts = () => this.props.hosts.filter(host =>
                host.active === false
            )

    clickHandler = (id) => {
        const selectedHost = this.props.hosts.find(host => {
            return host.id === id
        })

        this.setState({
            selectedHost: selectedHost
        }, () => console.log(selectedHost))
    }

    render(){

        return(
            <Grid celled='internally'>
                <Grid.Column width={8}>
                    <ColdStorage
                        hosts={this.allHosts()}
                        clickHandler={this.clickHandler}/>
                </Grid.Column>

                <Grid.Column width={5}>
                    <Details host={this.state.selectedHost}/>
                </Grid.Column>

                <Grid.Column width={3}>
                    <LogPanel />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Headquarters;
