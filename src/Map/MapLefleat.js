import  { useState } from 'react';

import "./Mapleafleat.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import LeafletGeo from './LeafletGeo';

const MapLefleat = () => {

    const position = [33.886917, 9.537499]
    const [show, setShow] = useState(true)

  return (
    <>
      <button className="show" onClick={()=>console.log(setShow(!show))}>Map leaflet</button>

    <div className='leaflet-container' style={{display :show ? "block":"none"}}>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
       <LeafletGeo/>

  </MapContainer>

    </div>

    </>


  )
}
//----------------Marker configuration ------------//

let DefaultIcon= L.icon({
  iconUrl:require("./icon.png") ,
  iconSize: new L.Point(50, 65),
  iconAnchor: new L.Point(25,65),
  popupAnchor: new L.Point(2, -40)
})

L.Marker.prototype.options.icon = DefaultIcon;
//----------------------------------------------------------//
// marker icon
// var greenIcon = L.icon({
//   iconUrl: './icon.png',
//   shadowUrl: 'leaf-shadow.png',

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// L.Marker.prototype.options.icon= greenIcon

// const iconPerson = new L.Icon({
//     iconUrl: require('./marker-icon.png'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(50, 65),
//     className: 'leaflet-div-icon'
// });
// L.Marker.prototype.options.icon= iconPerson
// console.log(iconPerson)
// let DefaultIcon = new L.icon({
//     iconUrl:  require('./icmap.png')

//    })
// L.Marker.prototype.options.iconUrl= DefaultIcon
// console.log(DefaultIcon)


export default MapLefleat