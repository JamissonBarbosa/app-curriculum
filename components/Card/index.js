import React from 'react'
import {View, Text} from 'react-native'


import styles from './style'

const Card = ({titulo, children}) => {
    return (
        <View style={styles.card}>
          <View>
            <Text style={styles.cardHeader}>{titulo}</Text>
          </View>
          <View style={styles.cardContent}>
            {children}
          </View>
        </View>
    )
}

export default Card