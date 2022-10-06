import { getGit } from '../api/api.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { fetchMedium, Carousel, Label } from 'mediumpostscard'

import styles from '../styles/components/Home.module.css'

export default function Home({ gitData, dataMedium }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
        <div className={styles.sliders}>
          <Projects gitData={gitData} />
          <Label text="Artigos no Medium">
            <Carousel options={{ssr: true}} dataMedium={dataMedium} />
          </Label>
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){

  const gitData = await getGit()
  const dataMedium = await fetchMedium('davidfernandodamata21')

  const aWeekInSeconds = 604800

  return {
    props: {
      gitData: gitData,
      dataMedium
    },

    revalidate: aWeekInSeconds
  }
}
