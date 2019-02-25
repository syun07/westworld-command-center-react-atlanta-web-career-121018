import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {
// console.log(props.areas)
    const hostList = (area) => {
        return props.hosts.filter(host =>
                (area.name === host.area) && (host.active === true)
            )
        }

    const areaList = props.areas.map(area =>
        <Area
            key={area.id}
            area={area}
            hosts={hostList(area)}/>
    )
    // console.log(areaList)

    return (
        <Segment id="map" >
            {areaList}
        </Segment>
    )
}


export default WestworldMap
