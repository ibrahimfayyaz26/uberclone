import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import Ant from 'react-native-vector-icons/AntDesign';
import SL from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const Search = () => {
    return (
        <View>
            <View style={styles.inputBox} >
                <Text style={styles.title} >Where To?</Text>
                <View style={styles.time}>
                 <Ant name="clockcircle" color="#535353" size={16}/>
                 <Text style={{color:"black"}} >Now</Text>
                 <SL name="arrow-down"  color="#535353" size={14}/>
                </View>
            </View>
            <View style={styles.row} >
                    <View style={styles.iconContainer}>
                        <Ant name="clockcircle" color="#fff" size={20}/>
                    </View>
                    <Text style={styles.destinationText}>Club</Text>
                </View>
                <View style={styles.row} >
                    <View style={[styles.iconContainer,{backgroundColor:"#218cff"}]}>
                    <Entypo name="home" size={20} color="#fff" />
                    </View>
                    <Text style={styles.destinationText}>Home</Text>
                </View>
        </View>
    )
}

export default Search
