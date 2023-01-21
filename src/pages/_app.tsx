/* eslint-disable @next/next/no-img-element */
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image'
import CodeIcon from '../../public/code.png';
import styles from '@/styles/app.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="/">
           <Image
            src={CodeIcon}
            alt="Picture of the author"
            width={48}
            height={48}
          />
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
