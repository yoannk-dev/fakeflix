// components/layouts/layout.tsx

import { ReactNode } from 'react';
import Header from '../organisms/Header'

type Props = {
  children: ReactNode;
};

export default function Layout({
  children
}: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}