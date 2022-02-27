// pages/index.tsx

import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Homepage from '../components/templates/Homepage';
import { getLastWeeksDate } from '../utils/utils';

type Movie = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};

export type { Movie };

type Props = {
  discover: Movie[],
  populars: Movie[],
}

const shuffleArray = (array: Movie[]): Movie[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

const Home: NextPage<Props> = (props) => {
  const [highLightMovie, setHighLightMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const randomDiscover = shuffleArray(props.discover);
    const highlightMovie: Movie = randomDiscover[0];
    setHighLightMovie(highlightMovie);
  }, [props.discover]);

  return <Homepage highlight={highLightMovie} populars={props.populars} />
}

export const getStaticProps: GetStaticProps = async () => {
  const lastWeek = getLastWeeksDate();
  const discover = await fetch(`https://api.themoviedb.org/3/discover/movie?region=FR&release_date.gte=${lastWeek}&with_watch_providers=8&watch_region=FR&sort_by=release_date.desc&api_key=${process.env.TMDB_APIKEY}`).then((response) => response.json())

  const populars = await fetch(`https://api.themoviedb.org/3/discover/movie?region=FR&release_date.gte=${lastWeek}&with_watch_providers=8&watch_region=FR&sort_by=popularity.desc&api_key=${process.env.TMDB_APIKEY}`).then((response) => response.json())

  return {
    props: {
      discover: discover.results || null,
      populars: populars.results || null,
    }
  }
}

export default Home
