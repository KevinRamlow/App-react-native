import useFetch from '../../adapters/data/useFetch'
import { COLORS, icons, SIZES } from '../../components/constants'
import JobTabs from '../../adapters/userInterface/interface/jobdetails/tabs/Tabs'
import JobAbout from '../../adapters/userInterface/interface/jobdetails/about/About'
import Company from '../../adapters/userInterface/interface/jobdetails/company/Company'
import JobFooter from '../../adapters/userInterface/interface/jobdetails/footer/Footer'
import Specifics from '../../adapters/userInterface/interface/jobdetails/specifics/Specifics'
import ScreenHeaderBtn from '../../adapters/userInterface/interface/screenHeaderbtn/ScreenHeaderBtn'


import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'

const tabs = ['Sobre', 'Qualificações', 'Responsabilidades']


const JobDetails = () => {
  const params = useSearchParams()
  const router = useRouter()

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id
  })

  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0])
  
  const onRefresh = () => {}

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualificações':
        return <Specifics 
          title='Qualificações'
          points={data[0].job_highlights?.Qualifications ?? ['Sem dados!']}
          />

      case 'Sobre':
        return <JobAbout 
          info={data[0].job_description ?? 'Sem Dados!'}
        />

      case 'Responsabilidades':
        return <Specifics 
        title='Responsabilidades'
        points={data[0].job_highlights?.Responsibilities ?? ['Sem dados!']}
      />
      default: 
        break
    }
  }

  return ( 
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.left}
              dimension={'60%'}
              handlePress={ () => router.back() }
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.share}
              dimension={'60%'}
            />
          ),
          headerTitle: ''
        }}
      />
    
      <>
        <ScrollView showsVerticalScrollIndicator={false} RefreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : error ? (
            <Text>Algo deu errado!</Text>
          ) : data.length === 0 ? (
            <Text>Sem dados!</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company 
                companyLogo={data[0].employer_logo}
                companyTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter url={data[0]?.job_google_link ?? 'hhtps:/careers.google.com/jobs/results'}/>
      </>
    </SafeAreaView>
  )
}

export default JobDetails