// components/templates/Homepage.tsx

import type { Movie } from '../../pages/index';
import HomepageHighlight from "../organisms/HomepageHighlight";
import HomepagePopulars from "../organisms/HomepagePopulars";

type Props = {
  highlight: Movie | null,
  populars: Movie[] | null,
};

const Homepage: React.FunctionComponent<Props> = ({ highlight, populars }): JSX.Element | null => {
  if (!highlight) {
    return null;
  }

  return (
    <>
      <HomepageHighlight highlight={highlight} />
      <HomepagePopulars populars={populars} />
      <footer>
        <p style={{padding: '30px', 'textAlign': 'center'}}>Quick demo with Nextjs and themoviedb api.</p>
      </footer>
    </>
  );
};

export default Homepage;
