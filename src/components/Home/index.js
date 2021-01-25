import React from 'react'
import './style.css'
import homeBg from '../../assets/img/home-group-training.png'

export default function Home() {
    return (
        <div class="home wrapper">
            <img src={homeBg} alt="" />
            <div class="home-content">
                <div class="wow slideInLeft">
                    XÂY DỰNG WEBSITE TRONG MƠ CỦA BẠN CÙNG
                </div>
                <div class="wow slideInRight">Bytesoft jsc</div>
                <button class="wow pulse" data-wow-iteration="infinite">
                    <a href="#" style={{color: "white"}}>Xem them</a>
                </button>
            </div>
        </div>
    )
}
