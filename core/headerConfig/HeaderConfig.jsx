import ScreenHeaderBtn from '../../../adapters/userInterface/interface/screenHeaderbtn/ScreenHeaderBtn'
import { COLORS, icons, images, SIZES } from '../../../components/constants'

import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { View, ScrollView, SafeAreaView } from 'react-native'

// Renderiza a seção Header
const Header = () => {
  const router = useRouter()
  
  return (
    <SafeAreaView style={{ felx: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle:''
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        />  

      </ScrollView>
    </SafeAreaView>
    
  )
}

export default Header