import styles from './popularjobs.style'
import useFetch from '../../../adapters/data/useFetch'
import { COLORS, SIZES } from '../../../components/constants'
import PopularJobcard from '../../../adapters/userInterface/interface/cards/popularJobCard/PopularJobCard'

import { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'


const Popularjobs = () => {
  const router = useRouter()

  const { data, isLoading, error } = useFetch
  ('search', {
      query: 'React developer',
      num_pages: 1
    })

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trabalhos populares</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Mostrar todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} colors={COLORS.primary}/>
        ) : error ? (
          <Text>Algo deu errado!</Text>
        ) : (
          <FlatList 
            data={ data }
            renderItem={({ item }) => (
              <PopularJobcard 
                item={ item }
                handleCardPress={handleCardPress}
                selectedJob={selectedJob}
              />
            )}

            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs