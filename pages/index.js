import { getGit, getMedium } from '../api/api.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MediumArticles from '../components/MediumArticles'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import styles from '../styles/components/Home.module.css'

export default function Home({ gitData, dataMedium }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.sliders}>
          <Projects gitData={gitData} />
          <MediumArticles dataMedium={dataMedium} />
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){

  const gitData = await getGit()
  const dataMedium = await getMedium()

  const aWeekInSeconds = 604800

  return {
    props: {
      gitData: gitData,
      dataMedium: dataMedium.dataMedium
    },

    revalidate: aWeekInSeconds
  }
}
