import React, { Component } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  Polyline,
} from "react-google-maps"

const path = [
  { lat: -34.397, lng: 150.644 },
  { lat: -34.398, lng: 150.645 },
  { lat: -34.399, lng: 150.646 },
  { lat: -34.400, lng: 150.647 },
  { lat: -34.4001, lng: 150.648 },
];

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.position}
    center={props.position}
  >
    <Polyline
      path={props.path}
      geodesic={props.geodesic}
      options={props.options}
    />
    <Marker {...props.marker} />
  </GoogleMap>
))

const LineMap = ({ lat, lng, paths }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    position={{ lat, lng }}
    marker={{ position: { lat, lng } }}
    path={[
      { lat: -34.397, lng: 150.644 },
      { lat: -34.398, lng: 150.645 },
      { lat: -34.399, lng: 150.646 },
      { lat: -34.400, lng: 150.647 },
      { lat: -34.4001, lng: 150.648 },
    ]}
    options={{
      geodesic: true,
      strokeOpacity: 0.5,
      strokeColor: '#FF0000',
      strokeWeight: 2,
    }}
  />
)

export default LineMap
