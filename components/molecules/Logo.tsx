// components/molecules/Logo.tsx

import Image from 'next/image'
import logo from '../../public/logo.png'

const Logo: React.FunctionComponent = (): JSX.Element => {
  return <Image
    src={logo}
    alt="fakeflix"
    width={120}
    height={35}
  />
}

export default Logo
