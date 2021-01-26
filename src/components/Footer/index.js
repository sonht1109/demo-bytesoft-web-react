import React, { useEffect } from 'react'
import bigLogo from '../../assets/img/footer-logo.png'
import markIcon from '../../assets/img/map-mark.png'
import { TiSocialDribbble, TiSocialFacebook, TiSocialGooglePlus, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialVimeo, TiSocialYoutube } from 'react-icons/ti';
import './style.css'
import { wowInit } from '../wow';

export default function Footer() {

    useEffect(() => {
        wowInit()
    }, [])

    return (
        <div className="footer wrapper">
            <div className="d-flex justify-content-center logo">
                <img src={bigLogo} alt="" className="wow zoomIn" />
            </div>
            <div className="contact">

                <div className="first-col contact-col">
                    <div className="col-title position-relative">
                        <img src={markIcon} alt="" className="position-absolute left-0" />
                        <span>Trụ Sở Chính Hà Nội</span>
                    </div>
                    <p>Số điện thoại: 0904 609 780</p>
                    <p>Email: info@bytesoft.net</p>
                    <p>Tầng 12 - Toà văn phòng - Tổ hợp Sunsquare - Số 21 Lê Đức Thọ - Phường Mỹ Đình 2 - Quận Nam Từ Liêm - Thành phố Hà Nội</p>
                </div>

                <div className="second-col contact-col">
                    <div className="col-title position-relative">
                        <img src={markIcon} alt="" className="position-absolute left-0" />
                        <span>Chi Nhánh Thành Phố Hồ Chí Minh</span>
                    </div>
                    <p>Số điện thoại: 0904 609 780</p>
                    <p>Email: hcm@bytesoft.net</p>
                    <p>Số 11B, đường Hồng Hà, phường 2, quận Tân Bình, Thành Phố Hồ Chí Minh</p>
                </div>

                <div className="third-col contact-col">
                    <div className="col-title">
                        <span>theo dõi chúng tôi qua</span>
                    </div>
                    <div className="social">
                        <div>
                            <a href="#">
                                <TiSocialTwitter size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialFacebook size={20} color="#cccccc"/>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialInstagram size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialGooglePlus size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialLinkedin size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialYoutube size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialDribbble size={20} color="#cccccc" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <TiSocialVimeo size={20} color="#cccccc" />
                            </a>
                        </div>

                    </div>
                    <p>Copyright © 2018 Bytesoft Viet Nam. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
