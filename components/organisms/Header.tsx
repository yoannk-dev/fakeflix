// components/organisms/Header.tsx

import type { NextPage } from 'next'
import Link from 'next/link'
import Logo from '../molecules/Logo'
import styles from './Header.module.scss'

const Header: NextPage = () => {
  return <header className={styles.header}>
    <Link href="/" passHref>
      <a><Logo /></a>
    </Link>
    <span className={styles.tagline}>
      Quick demo with Nextjs and themoviedb api.
    </span>
  </header>
}

export default Header
