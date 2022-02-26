// components/organisms/HomepageHighLight.tsx

import Image from 'next/image';
import type { Movie } from '../../pages/index';
import Button from '../atoms/Button';
import styles from './HomepageHighlight.module.scss';

type Props = {
  highlight: Movie | null
};

const HomepageHighLight: React.FunctionComponent<Props> = ({ highlight }) => {
  if (!highlight) {
    return null
  }

  return (
    <div className={styles.root}>
      { highlight.poster_path ? (
        <>
          <div className={styles.image}>
            <Image
              src={`https://image.tmdb.org/t/p/original${highlight.poster_path}`}
              width="500"
              height="750"
              alt={highlight.title}
              layout="fill"
              quality={100}
            />
          </div>
          { highlight.title ? (
            <div className={styles.desc}>
              <span className={styles.tag}>New on Netflix</span>
              <h1 className={styles.title}>{highlight.title}</h1>
              <p className={styles.overview}>{highlight.overview}</p>
              <Button href={`https://www.themoviedb.org/movie/${highlight.id}`}>
                More
              </Button>
            </div>
          ) : '' }
          
        </>
      ) : ''}
    </div>
  )
}

export default HomepageHighLight
