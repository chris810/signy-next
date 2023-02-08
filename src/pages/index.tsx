import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/layout'
import HomeCarousel from '@/components/Carousel/carousel'

import SignyLogo from '../../public/signy-cropped.svg';

export default function Home() {
  return (
    <Layout>
    <div className={styles.carouselContainer}>
      <HomeCarousel />
      <div className={styles.introduction}>
        <div className={styles.introductionImageContainer}>
          <Image className={styles.introductionImage} src={SignyLogo} alt='Signy Logo'/>
        </div>
        <div className={styles.introductionTextContainer}>
          <h1>We are Signy</h1>
          <p className={styles.introductionText}>A US based digital games and educational website. We develop, publish and distribute games with the purpose of making learning fun. Our primary focus in the present is to help spread awareness of the ASL community.</p>
          <button>Know More</button>        
        </div>
      </div>
    </div>
    
    </Layout>
  )
}
