// components/organisms/Header.tsx

import type { NextPage } from 'next'
import Logo from '../molecules/Logo'
import styles from './Header.module.scss'

const Header: NextPage = () => {
  return <header className={styles.header}>
    <Logo />
  </header>
}

export default Header
