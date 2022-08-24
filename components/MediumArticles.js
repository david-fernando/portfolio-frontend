import { Carousel } from 'mediumpostscard'

import styles from '../styles/components/SliderCard.module.css'

function MediumArticles({ dataMedium }){
  
  return (
    <div className={styles.sliderContainer}>
      <span className="title">Artigos no Medium</span>
      <Carousel dataMedium={dataMedium} options={{ssr: true}} />
    </div>
  )
}

export default MediumArticles