import React from 'react'
import './style.css'
import { customers } from './customers';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

export default function Customer() {
    return (
        <div class="customer wrapper d-flex justify-content-center align-items-center flex-column">
            <img src="assets/img/vertical_line2.png" alt="" class="vertical wow fadeInDown" />
            <p class="text-center title">Ý KIẾN PHẢN HỒI TỪ KHÁCH HÀNG</p>
        </div>
    )
}
