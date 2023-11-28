import styles from '../workingTime/workingtime.style'

import React from 'react'
import { useState } from 'react'
import { useRouter} from 'expo-router'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../components/constants'

const WorkingTime = () => {
  const router = useRouter()

  const [activedJobType, setActivedJobType] = useState('Integral')
  const jobTypes = ['Integral', 'Meio período', 'Empregador']

  return (
    <View style={styles.tabsContainer}>
      <FlatList 
      data={jobTypes}
      renderItem={({ item }) => (
        <TouchableOpacity
        style={styles.tab(activedJobType, item)}
        onPress={() => {
          setActivedJobType(item)
          router.push(`/search/${item}`)
        }}
        >
          <Text style={styles.tabText(activedJobType, item)}>{ item }</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item}
      contentContainerStyle={{ columnGap: SIZES.small}}
      horizontal
      />
    </View>
  )
}

export default WorkingTime
