// components/templates/Homepage.tsx

import HomepageHighlight from "../organisms/HomepageHighlight";

import type { Movie } from '../../pages/index'

type Props = {
  highlight: Movie | null
};

const Homepage: React.FunctionComponent<Props> = ({ highlight }): JSX.Element | null => {
  if (!highlight) {
    return null;
  }

  return <HomepageHighlight highlight={highlight} />
}

export default Homepage
