import styles from './about.style'

import React from 'react'
import { View, Text } from 'react-native'


const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Sobre o trablaho:</Text>

      <View Style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

export default About