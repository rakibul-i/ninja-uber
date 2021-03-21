import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
//note: code formatted for ES6 here

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            address: '' ,

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 49.2827291,
                lng: -123.1207375
            }
            
       };
      }
     
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              const latt = latLng;
          })
          .catch(error => {
              const err = error;

          });
      };
   
    render() {
      return (
          <div>
                <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
          
        <Map google={this.props.google}
           initialCenter={{
               lat:this.state.mapCenter.lat,
               lng:this.state.mapCenter.lng
           }}
           center={{
            lat:this.state.mapCenter.lat,
            lng:this.state.mapCenter.lng
           }}
           >
          <Marker 
            position={{
                lat:this.state.mapCenter.lat,
               lng:this.state.mapCenter.lng
            }}
           />
        </Map>
        </div>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDbROdpO3ecoMCOrl0qz_v_1Iiymclaspo')
  })(MapContainer)