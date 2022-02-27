// components/organisms/HomepagePopulars.tsx

import Image from 'next/image';
import type { Movie } from '../../pages/index';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './HomepagePopulars.module.scss';

type Props = {
  populars: Movie[] | null
};

const HomepagePopulars: React.FunctionComponent<Props> = ({ populars }) => {
  if (!populars) {
    return null
  }

  const listMovies = populars.map((movie) => (
    <SwiperSlide key={movie.id}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            width="500"
            height="750"
            alt={movie.title}
            quality={100}
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.root}>
      <h2 className="title">Populars on Netflix</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
      >
        {listMovies}
      </Swiper>
    </div>
  )
}

export default HomepagePopulars;
