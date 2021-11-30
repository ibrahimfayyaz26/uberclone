import React from 'react'
import { View, Text } from 'react-native'
import Map from '../../components/ResultMap/Map'
import { styles } from './styles'
import UberRow from '../../components/UberRow/UberRow'

const SearchResult = () => {
    return (
        <View style={styles.container} >
            <Map/>
            <UberRow/>
        </View>
    )
}

export default SearchResult
