import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'

const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  const renderSomethingElse = (host) => (<HostInfo host={host}/>)

  return(
    <Segment id="details" className="HQComps">
      {props.host === null ? renderSomething() : renderSomethingElse(props.host)}
    </Segment>
  )
}

export default Details
