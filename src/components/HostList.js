import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
    // console.log(props.hosts)
    const allHosts = props.hosts.map(host =>
        <Host
            key={host.id}
            host={host}
            clickHandler={props.clickHandler}/>
    )

  return(
    <Card.Group itemsPerRow={6}>
        {allHosts}
    </Card.Group>
  )
}

export default HostList
