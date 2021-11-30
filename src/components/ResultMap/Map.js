import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = {
    latitude: 28.460027,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.451327,
    longitude: -16.263145,
  };

  return (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0111,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={'AIzaSyC5Fx-9r5H32Pzr23KIDxIDIOA2Xp7M3tA'}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      <Marker title="origin" coordinate={origin} />
      <Marker title="destination" coordinate={destination} />
    </MapView>
  );
};

export default Map;
