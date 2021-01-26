import React, { useEffect } from 'react'
import { hirings, hiringIcon } from './hirings';
import verticalLine from '../../assets/img/vertical_line2.png'
import hiringImg from '../../assets/img/about.png'
import './style.css'
import { wowInit } from '../wow';

export default function Hiring() {

    useEffect(() => {
        wowInit()
    }, [])

    const hiringItem = (item, index) => {
        return (
            <div className="content-item wow slideInLeft" key={"hiring" + index}>
                <img src={hiringIcon} alt="" />
                <span>{item}</span>
            </div>
        )
    }

    return (
        <div className="hiring d-flex flex-column justify-content-center align-items-center">
            <img className="vertical wow fadeInDown" src={verticalLine} alt="" />
            <p className="title text-center">THÔNG TIN TUYỂN DỤNG</p>
            <div className="hiring-detail d-flex justify-content-center align-items-center">
                <div className="hiring-content">
                    {hirings.map((item, index) => hiringItem(item, index))}
                    <button className="wow pulse" data-wow-iteration="infinite">
                        <a href="#" style={{color: "white"}}>GIA NHẬP BYTESOFT</a>
                    </button>
                </div>
                <img className="d-none d-lg-block wow slideInDown" src={hiringImg} alt="" />
            </div>
        </div>
    )
}
