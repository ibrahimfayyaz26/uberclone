import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/UberAssets/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/UberAssets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/UberAssets/images/top-Comfort.png');
    }
    return require('../../assets/UberAssets/images/top-UberXL.png');
  };
  return (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.456208,
        longitude: -16.259098,
        latitudeDelta: 0.0132,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform:[{
                rotate:`${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
