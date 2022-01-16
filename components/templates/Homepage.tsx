// components/templates/Homepage.tsx

import type { NextPage } from 'next'

interface Props {
  highLight: {
    title: string
  } | null
}

const Homepage: NextPage<Props> = (props) => {
  const { highLight } = props
  // to do, component HighlightMovie
  return <div>{highLight && highLight.title}</div>
}

export default Homepage
