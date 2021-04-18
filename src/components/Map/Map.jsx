import React, { Component } from 'react';
import { GoogleMap, Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
            <>
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                {
                    lat: 44.771794,
                    lng: -93.37262,
                }
                } 
            >
                <Marker position={{ lat: 44.771794, lng: -93.37262 }}/>
            </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer);



// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from './Marker';



// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({text}: any) => <div>{text}</div>;

// const SimpleMap = (props: any) => {
//     const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
//     const [zoom, setZoom] = useState(11);
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//             bootstrapURLKeys={{ key: '' }}
//             defaultCenter={center}
//             defaultZoom={zoom}
//             >
//             <AnyReactComponent
//                 lat={11.0168}
//                 lng={76.9558}
//                 text="My Marker"
//             />
//             </GoogleMapReact>
//         </div>
//     );
// }

// export default SimpleMap;