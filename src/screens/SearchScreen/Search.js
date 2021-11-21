import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Search = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder="Current Location"
          styles={{textInput: styles.input}}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setFrom({data, details});
          }}
          query={{
            key: 'AIzaSyCDne5x8Fpe2vehQ9H-ssWUi9R9nzopbgE',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={{textInput: styles.input}}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setTo({data, details});
          }}
          query={{
            key: 'AIzaSyCDne5x8Fpe2vehQ9H-ssWUi9R9nzopbgE',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
