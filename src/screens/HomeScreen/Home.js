import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap/HomeMap'
import Search from '../../components/HomeSearch/Search'
import Covid from '../../components/Message/Covid'

const Home = () => {
    return (
        <View>
            <HomeMap/>
            <Covid/>
            <Search/>
        </View>
    )
}

export default Home
