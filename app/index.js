import Welcome from '../core/home/welcome/Welcome'
import Header from '../core/home/headerConfig/HeaderConfig'
import Nearbyjobs from '../core/home/nearByJobs/Nearbyjobs';
import WorkingTime from '../core/home/workingTime/WorkingTime';
import Popularjobs from '../core/home/popularJobs/Popularjobs';
import { COLORS, icons, images, SIZES } from '../components/constants';

import { useState } from "react";
import { Stack, useRouter } from 'expo-router'
import { View, ScrollView, SafeAreaView } from 'react-native'

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SafeAreaView style={{ felx: 1, backgroundColor: COLORS.lightWhite }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View 
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome />
          <WorkingTime />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>     
    </SafeAreaView>  
  )
}

export default Home