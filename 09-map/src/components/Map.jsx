import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.position}
    center={props.position}
  >
    <Marker {...props.marker} />
  </GoogleMap>
))

const Map = ({ lat, lng }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    position={{ lat, lng }}
    marker={{ position: { lat, lng } }}
  />
)

export default Map
