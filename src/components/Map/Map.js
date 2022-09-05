import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import './Map.css'
import { showDataOnMap } from '../../util'

export default class Map extends Component {
    render() {
        return (
            <div className="map">
                {!this.props.country ? <h4>Infections in the world</h4> : <h4>{`Infection in ${this.props.country}`}</h4>}
                <LeafletMap style={{ borderRadius: "20px", height: "290px" }} center={this.props.center} zoom={this.props.zoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors' />
                    {showDataOnMap(this.props.countryData)}
                </LeafletMap>
            </div>
        )

    }
}
