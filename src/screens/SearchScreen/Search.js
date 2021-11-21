import React,{useState} from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Search = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    return (
        <SafeAreaView>
        <View style={styles.container} >
            <TextInput 
               style={styles.input} 
               value={from} 
               onChangeText={setFrom} 
               placeholder="Current Location"/>
            <TextInput 
            style={styles.input}
            value={to} 
            onChangeText={setTo} 
            placeholder="Where to?"/>
             <GooglePlacesAutocomplete
              placeholder='Search'
              fetchDetails = {true}
              onPress={(data, details = null) => {
           // 'details' is provided when fetchDetails = true
             console.log(data, details);
              }}
              query={{
                key: 'AIzaSyA1Bsldc-hQYyf7KKIq-SiMNrnRpQus3pU',
                language: 'en',
                }}
            />
        </View>
        </SafeAreaView>
    )
}

export default Search
