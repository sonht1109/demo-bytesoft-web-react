import React, { useEffect, useState } from 'react'
import { news } from './news'
import verticalLine from "../../assets/img/vertical_line3.png"
import './style.css'
import { wowInit } from '../wow';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';


export default function News() {

    useEffect(() => {
        wowInit()
    }, [])

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === news.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? news.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const newsItem = (news, index) => {
        return (
            <div className="news-item d-flex justify-content-center align-items-center flex-lg-column" key={"news" + index}>
                <div className="news-img">
                    <img src={news.img} alt="" />
                </div>
                <div className="news-content">
                    <p className="text-center">on {news.date}</p>
                    <p className="news-title text-uppercase text-center">
                        {news.title}
                    </p>
                    <p className="text-center">{news.subtitle} </p>
                    <a href="#">Đọc tiếp</a>
                </div>

            </div>
        )
    }

    return (
        <div className="news d-flex justify-content-center align-items-center flex-column wrapper">
            <img src={verticalLine} alt="" className="vertical wow fadeInDown" />
            <p className="title text-center">TIN TỨC</p>
            <div className="news-container wow slideInLeft">
                {news.map((news, index) => newsItem(news, index))}
            </div>
            {/* news slide */}
            <div className="news-slide-container">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={news} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {news.map((news, index) => {
                        return (
                            <CarouselItem
                                key={"news" + index}
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}>
                                    {newsItem(news, index)}
                            </CarouselItem>
                        )
                    })}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <img src={verticalLine} alt="" className="vertical news-vertical-2  wow fadeInDown" />
        </div>
    )
}
