import React from 'react'
import { hirings, hiringIcon } from './hirings';
import verticalLine from '../../assets/img/vertical_line2.png'
import hiringImg from '../../assets/img/about.png'
import './style.css'

export default function Hiring() {

    const hiringItem = (item, index) => {
        return (
            <div class="content-item wow slideInLeft" key={"hiring" + index}>
                <img src={hiringIcon} alt="" />
                <span>{item}</span>
            </div>
        )
    }

    return (
        <div class="hiring d-flex flex-column justify-content-center align-items-center">
            <img class="vertical wow fadeInDown" src={verticalLine} alt="" />
            <p class="title text-center">THÔNG TIN TUYỂN DỤNG</p>
            <div class="hiring-detail d-flex justify-content-center align-items-center">
                <div className="hiring-content">
                    {hirings.map((item, index) => hiringItem(item, index))}
                    <button class="wow pulse" data-wow-iteration="infinite">
                        <a href="#" style={{color: "white"}}>GIA NHẬP BYTESOFT</a>
                    </button>
                </div>
                <img class="d-none d-lg-block wow slideInDown" src={hiringImg} alt="" />
            </div>
        </div>
    )
}
