import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const Search = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    if (from && to) {
      console.warn('navigate');
    }
  }, [from, to]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Current Location"
          suppressDefaultStyles
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.input,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setFrom({data, details});
          }}
          query={{
            key: 'AIzaSyC5Fx-9r5H32Pzr23KIDxIDIOA2Xp7M3tA',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          suppressDefaultStyles
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.input,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setTo({data, details});
          }}
          query={{
            key: 'AIzaSyC5Fx-9r5H32Pzr23KIDxIDIOA2Xp7M3tA',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
