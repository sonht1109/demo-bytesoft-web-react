import React, { useEffect } from 'react'
import { news } from './news'
import verticalLine from "../../assets/img/vertical_line3.png"
import './style.css'
import { wowInit } from '../wow';

export default function News() {

    useEffect(() => {
        wowInit()
    }, [])

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
            <img src={verticalLine} alt="" className="vertical wow fadeInDown" />
        </div>
    )
}
