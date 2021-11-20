import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const Covid = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Travel only if necessary</Text>
            <Text style={styles.text}>Let's learn React Native by building the Uber clone from scratch 
                  "The Full-stack Mobile Developer" and become a 6-figure dev in 2021: 
            </Text>
            <Text  style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default Covid
