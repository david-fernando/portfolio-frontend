import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import useMobileDevice from '../hooks/useMobileDevice'
import responsive from '../utils/carouselBreakPoint'

import styles from '../styles/components/SliderCard.module.css'

function SliderCard({ title, children }){

  const { isMobileDevice } = useMobileDevice()

  const card = children

  return (
    <div className={styles.sliderContainer}>
      <span className="title">{ title }</span>
      <Carousel
        ssr
        autoPlaySpeed={0}
        arrows={(card.length > 3 || isMobileDevice)? true : false}
        className="container-slider"
        containerClass="container-slider"
        itemClass="slider-card"
        profile="true"
        partialVisible="false"
        focusOnSelect={true}
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        deviceType="desktop"
        responsive={responsive}
        >
        {
          children
        }
        </Carousel>
    </div>
  )
}

export default SliderCard