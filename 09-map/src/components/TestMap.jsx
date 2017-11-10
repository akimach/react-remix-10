import React, { Component } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  Polyline,
} from "react-google-maps"

const InnerMap = withGoogleMap(props => {
  var list = props.data.map((data) => {
    return (
      <Polyline
        key={data.key}
        path={data.path}
        options={data.option}
      />
      )
  })
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={props.position}
      center={props.position}
    >
      {list}
      <Marker {...props.marker} />
    </GoogleMap>
  )
})

const TestMap = ({ lat, lng, paths }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    position={{ lat, lng }}
    marker={{ position: { lat, lng } }}
    data={[
      {
        key: 0,
        path: [
          { lat: -34.399, lng: 150.649 },
          { lat: -34.398, lng: 150.645 },
          { lat: -34.399, lng: 150.646 },
          { lat: -34.400, lng: 150.647 },
          { lat: -34.4001, lng: 150.648 },
        ],
        option: {
          geodesic: true,
          strokeOpacity: 0.5,
          strokeColor: '#FF0000',
          strokeWeight: 2,
        }
      },
      {
        key: 1,
        path: [
          { lat: -34.397, lng: 150.644 },
          { lat: -34.392, lng: 150.624 },
          { lat: -34.393, lng: 150.645 },
          { lat: -34.403, lng: 150.644 },
          { lat: -34.4021, lng: 150.658 },
        ],
        option: {
          geodesic: true,
          strokeOpacity: 0.5,
          strokeColor: '#FAA000',
          strokeWeight: 2,
        }
      },
    ]}
  />
)

export default TestMap
