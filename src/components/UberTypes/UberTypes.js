import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypes = ({type}) => {
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/UberAssets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/UberAssets/images/Comfort.jpeg');
    }
    return require('../../assets/UberAssets/images/UberXL.jpeg');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypes;
