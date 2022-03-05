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
          <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer">
            <Image
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              width="500"
              height="750"
              alt={movie.title}
              quality={100}
            />
          </a>
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
        slidesPerView={2}
        slidesPerGroup={1}
        centeredSlides={true}
        breakpoints={{
          769: {
            slidesPerGroup: 5,
            slidesPerView: 5,
            centeredSlides: false,
          }
        }}
        navigation
      >
        {listMovies}
      </Swiper>
    </div>
  )
}

export default HomepagePopulars;
