// components/molecules/Logo.tsx

import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Logo: NextPage = () => {
  return <Image
    src={logo}
    alt="fakeflix"
    width={120}
    height={35}
  />
}

export default Logo
