// pages/index.tsx

import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Homepage from '../components/templates/Homepage'

interface Props {
  discover: []
}

type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const Home: NextPage<Props> = (props) => {
  const [highLightMovie, setHighLightMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const randomDiscover = shuffleArray(props.discover)
    const highlightMovie: Movie = randomDiscover[0]
    setHighLightMovie(highlightMovie)
  }, []);

  return <>
    <Homepage highLight={highLightMovie} />
  </>
}

export const getStaticProps: GetStaticProps = async () => {
  const discover = await fetch('https://api.themoviedb.org/3/discover/movie?region=FR&air_date.gte=2022-01-01&with_watch_providers=8&watch_region=FR&sort_by=first_air_date.desc&api_key=' + process.env.TMDB_APIKEY).then((response) => response.json())

  return {
    props: {
      discover: discover.results
    }
  }
}

export default Home
