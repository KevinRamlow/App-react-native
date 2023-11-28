import styles from './welcome.style'
import { icons, SIZES } from '../../../components/constants'

import { useState } from 'react'
import { useRouter} from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

// Renderiza a seção Welcome 
const Welcome = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Olá Kevin</Text>
      <Text style={styles.welcomeMessage}>Ache o seu trabalho perfeito!</Text>  
    </View>    
  )
}

export default Welcome