import React, { useEffect } from 'react'
import './style.css'
import homeBg from '../../assets/img/home-group-training.png'
import { wowInit } from '../wow';

export default function Home() {
    useEffect(() => {
        wowInit()
    }, [])
    return (
        <div className="home wrapper">
            <img src={homeBg} alt="" />
            <div className="home-content">
                <div className="wow slideInLeft">
                    XÂY DỰNG WEBSITE TRONG MƠ CỦA BẠN CÙNG
                </div>
                <div className="wow slideInRight">Bytesoft jsc</div>
                <button className="wow pulse" data-wow-iteration="infinite">
                    <a href="#" style={{ color: "white" }}>XEM THÊM</a>
                </button>
            </div>
        </div>
    )
}
