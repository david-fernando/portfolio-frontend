import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./CarouselButtons";
import Card from './Card'

import styles from '../styles/components/SliderCard.module.css'

function Carousel({ title, slides }){
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  
    const onSelect = useCallback(() => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);
  
    useEffect(() => {
      if (!embla) return;
      onSelect();
      embla.on("select", onSelect);
    }, [embla, onSelect]);
  
    return (
      <div className={styles.sliderContainer}>
        <span className="title">{ title }</span>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
                <div className="embla__slide">
                    <div className="embla__slide__inner">
                        <a key={index} href={item.link} target="_blank" rel="noreferrer" >
                            <Card data={ item }/>
                        </a>
                    </div>
                </div>
            ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    );
}

export default Carousel