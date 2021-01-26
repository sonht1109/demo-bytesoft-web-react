import React, { useEffect, useState } from 'react'
import './style.css'
import { customers } from './customers';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import verticalLine from '../../assets/img/vertical_line2.png'
import { wowInit } from '../wow';

export default function Customer() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    wowInit()
  }, [])

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === customers.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? customers.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = customers.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={"customer" + index}
      >
        <div className="slide-item position-relative">
          <div className="slide-img d-flex justify-content-center position-absolute">
            <img src={item.avt} alt="" />
          </div>
          <div className="slide-caption">
            <p className="text-center">{item.content}</p>
            <p className="text-center text-uppercase">
              {item.name} - {item.job}
            </p>
          </div>
        </div>
      </CarouselItem>
    );
  });


  return (
    <div className="customer wrapper d-flex justify-content-center align-items-center flex-column">
      <img src={verticalLine} alt="" className="vertical wow fadeInDown" />
      <p className="title text-center">Ý KIẾN PHẢN HỒI TỪ KHÁCH HÀNG</p>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={customers} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <img src={verticalLine} alt="" className="vertical wow fadeInDown" />
    </div>
  )
}
