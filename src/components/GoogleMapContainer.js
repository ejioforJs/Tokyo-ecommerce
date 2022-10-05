import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMapContainer extends Component {
  render() {
    return (
      <div className="mt-24 px-10 h-56">
        <Map
          google={this.props.google}
          style={{ width: '100%', height: '100%' }}
          zoom={10}
          initialCenter={{
            lat: 6.524379,
            lng: 3.379206,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAOc2k8684PLdOyR_VEhwwyf7P1J-yZ16E',
})(GoogleMapContainer);
