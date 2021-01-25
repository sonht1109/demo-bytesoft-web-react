import React from 'react'
import verticalLine from '../../assets/img/vertical_line1.png'
import Slider from "react-slick";
import { products } from './products';
import './style.css'

export default function Products() {

    const settings = {
        className: "product-img",
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              centerPadding: "60px"
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerPadding: "60px"
            }
          },
        ]
    }

    return (
        <div className="products product-text d-flex justify-content-center align-items-center flex-column wrapper">
            <img src={verticalLine} className="wow fadeInDown" />
            <p className="title text-center">NHÓM SẢN PHẨM BYTESOFT</p>
            <Slider {...settings}>
                {products.map((product, index) => {
                    return(
                        <div key={"product" + index} >
                            <img
                            className="product"
                            src={product.img}
                            alt=""
                            />
                        </div>
                    )
                })}
            </Slider>
            <div className="product-text d-flex justify-content-center align-items-center">
                <span className="wow bounceInDown">Chúng tôi ở đây để <strong>làm mọi thứ tốt hơn</strong></span>
            </div>
        </div>
    )
}
