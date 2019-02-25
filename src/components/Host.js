import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
    // console.log(props)



    return(
        <Card
            className="host"
            onClick={() => props.clickHandler(props.host.id)}
            image={props.host.imageUrl}
            raised
        />
    )
}

export default Host
