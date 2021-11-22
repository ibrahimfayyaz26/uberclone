import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import UberTypes from '../UberTypes/UberTypes';
import type from '../../assets/UberAssets/data/types';

const UberRow = () => {
  const confirm = () => {
    console.warn('confirmed');
  };
  return (
    <View style={styles.container}>
      {type.map(t => (
        <UberTypes key={t.id} type={t} />
      ))}
      <Pressable onPress={confirm} style={styles.confirm}>
        <Text style={styles.confirmText}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberRow;
