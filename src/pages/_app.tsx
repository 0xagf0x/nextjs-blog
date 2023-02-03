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
      {/* <section className="section_top">
          <div className="section-container">
              <div className="section-layout-container container-medium with-padding">
                  <div className="section-layout">
                      <div className="gradient-area">
                          <div className="gradient-title-area">
                          <h1 className="text text-above section-title-1">Test</h1>
                          <div  className="section_background-wrap">
                              <canvas id="gradient-canvas" data-js-darken-top data-transition-in></canvas>
                          </div>
                          <div className="text text-under text-under-blended section-title-1">Test</div>
                          <div className="text text-under text-under-overlay section-title-1">Test</div>
                          </div>
                      </div>
                      <h2 className="section-title-2 subtitle">Subtitle</h2>
                  </div>
              </div>
          </div>
      </section> */}
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
