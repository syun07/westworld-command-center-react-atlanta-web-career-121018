import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = (props) => {
    // console.log(props.hosts)

    return(
      <Segment.Group className="HQComps">
        <Segment compact>
          <h3 className="labels">ColdStorage</h3>
        </Segment>
        <Segment compact>

         <HostList hosts={props.hosts} clickHandler={props.clickHandler}/>

        </Segment>
      </Segment.Group>
    )
}

export default ColdStorage
