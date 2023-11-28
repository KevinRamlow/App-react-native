import axios from 'axios'
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '29e2ed5f67mshf9add13eea0b10ap1375f1jsn4c25be962cd9',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  }

  const fetchData = async () => {
    setIsloading(true)

    try {
      const response = await axios.request 
      (options)

      setData(response.data.data)
      setIsloading(false)
    } catch (error) {
      setError(error)
      console.log('ERRO --> ', error)
      alert('Algo deu errado! Tente novamente.')
    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsloading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch