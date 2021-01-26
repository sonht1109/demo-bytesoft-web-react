import React from 'react'
import { news } from './news'
import verticalLine from "../../assets/img/vertical_line3.png"
import './style.css'

export default function News() {

    const newsItem = (news, index) => {
        return (
            <div class="news-item d-flex justify-content-center align-items-center flex-lg-column" key={"news" + index}>
                <div class="news-img">
                    <img src={news.img} alt="" />
                </div>
                <div class="news-content">
                    <p class="text-center">on {news.date}</p>
                    <p class="news-title text-uppercase text-center">
                        {news.title}
                    </p>
                    <p class="text-center">{news.subtitle} </p>
                    <a href="#">Đọc tiếp</a>
                </div>

            </div>
        )
    }

    return (
        <div class="news d-flex justify-content-center align-items-center flex-column wrapper">
            <img src={verticalLine} alt="" class="vertical wow fadeInDown" />
            <p class="title text-center">TIN TỨC</p>
            <div class="news-container wow slideInLeft">
                {news.map((news, index) => newsItem(news, index))}
            </div>
            <img src={verticalLine} alt="" class="vertical wow fadeInDown" />
        </div>
    )
}
