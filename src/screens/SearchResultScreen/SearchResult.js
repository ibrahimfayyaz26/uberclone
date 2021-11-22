import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap/HomeMap'
import { styles } from './styles'
import UberRow from '../../components/UberRow/UberRow'

const SearchResult = () => {
    return (
        <View style={styles.container} >
            <HomeMap/>
            <UberRow/>
        </View>
    )
}

export default SearchResult
