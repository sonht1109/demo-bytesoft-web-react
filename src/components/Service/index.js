import React, { useState } from 'react'
import { services } from './services'
import { Container, Row, Col } from 'reactstrap'
import './style.css'

export default function Service() {

  const [index, setIndex] = useState(0)

  const rightBlockItem = (item) => {
    return (
      <div class="right-block col-xl-7 col-12 active wow fadeInDown" id="block-1">
        <div class="right-block-wrapper">
          <p>{item.name}</p>
          <span>{item.content[0]}</span>
          <div class="service-detail">
            <span>{item.content[1]}</span>
            <img src={item.contentImg} alt="" />
          </div>
          <span>{item.content[2]}</span>
          <br />
          <a href="#" class="read-more">XEM THEM</a>
        </div>
      </div>
    )
  }

  const leftBlockItem = (item, i) => {
    return (
      <div
        class={`block-item ${index === i && 'active'}`}
        onClick={() => setIndex(i)}
        key={"leftBlock" + i}>
        <div class="block-img">
          <img src={item.inactiveImg} alt="" />
          <img src={item.activeImg} alt="" />
        </div>
        <span>{item.name}</span>
      </div>
    )
  }

  return (
    <div class="service wrapper">
      <div class="service-content">
        <div class="top-content">
          <div class="title">DỊCH VỤ - BYTESOFT</div>
          <span class="wow fadeInDown">Với tiêu chí "Chất lượng hơn số lượng. ByteSoft luôn tạo ra những sản phẩm có giá
          trị
          cao nhất". Đến với
              chúng tôi, khách hàng sẽ luôn được cung cấp những dịch vụ tốt nhất</span>
        </div>
        <div class="service-block">
        <Container>
              <Row>
                <Col xl="5" className="left-block">
                  {
                    services.map((item, index) => {
                      return leftBlockItem(item, index)
                    })
                  }
                </Col>

                <Col xl="7" className="right-block">
                  <div class="right-block-wrapper">
                    {rightBlockItem(services[index])}
                  </div>
                </Col>
              </Row>
            </Container>
          {/* <div class="container-fluid d-flex justify-content-center align-items-center p-0"> */}
            {/* <!-- left --> */}
            {/* <div class="left-block col-xl-5 col-12 wow fadeInLeft">
              {
                services.map((item, index) => {
                  return leftBlockItem(item, index)
                })
              }
            </div> */}
            {/* <!-- right --> */}
            {/* <div class="right-block col-xl-7 col-12 active wow fadeInDown" id="block-1">
              <div class="right-block-wrapper">
                {rightBlockItem(services[index])}
              </div>
            </div> */}
            
            {/* <!-- block 2 --> */}
            {/* <div class="right-block col-xl-7 col-12" id="block-2">
              <div class="right-block-wrapper">
                <p>LAP TRINH PHAN MEM</p>
                <span>Detailed development of out project strategy is very important to us. Even in a volatile
                environment
                of the fluctuating market, we will minimise your costs and increase your profits. We understand risks
                    and appreciate your trust. Thus, we offer advice and support your negotiations.</span>
                <div class="service-detail">
                  <span>Detailed development of out project strategy is very important to us. Even in a volatile
                      environment of the fluctuating market, we will minimise your costs and increase your profits.</span>
                  <img src="assets/img/service-img.png" alt="" />
                </div>
                <span>We understand risks and appreciate your trust. Thus, we offer advice and support your
                    negotiations.</span>
                <br />
                <a href="#" class="read-more">XEM THEM</a>
              </div>
            </div> */}
            {/* <!-- block 3 --> */}
            {/* <div class="right-block col-xl-7 col-12" id="block-3">
              <div class="right-block-wrapper">
                <p>BLOCKCHAIN</p>
                <span>Detailed development of out project strategy is very important to us. Even in a volatile
                environment
                of the fluctuating market, we will minimise your costs and increase your profits. We understand risks
                    and appreciate your trust. Thus, we offer advice and support your negotiations.</span>
                <div class="service-detail">
                  <span>Detailed development of out project strategy is very important to us. Even in a volatile
                      environment of the fluctuating market, we will minimise your costs and increase your profits.</span>
                  <img src="assets/img/service-img.png" alt="" />
                </div>
                <span>We understand risks and appreciate your trust. Thus, we offer advice and support your
                    negotiations.</span>
                <br />
                <a href="#" class="read-more">XEM THEM</a>
              </div>
            </div> */}
            {/* <!-- block 4 --> */}
            {/* <div class="right-block col-xl-7 col-12" id="block-4">
              <div class="right-block-wrapper">
                <p>PHAN MEM GIAO DUC</p>
                <span>Detailed development of out project strategy is very important to us. Even in a volatile
                environment
                of the fluctuating market, we will minimise your costs and increase your profits. We understand risks
                    and appreciate your trust. Thus, we offer advice and support your negotiations.</span>
                <div class="service-detail">
                  <span>Detailed development of out project strategy is very important to us. Even in a volatile
                      environment of the fluctuating market, we will minimiseimport {services} from './services';
 your costs and increase your profits.</span>
                  <img src="assets/img/service-img.png" alt="" />
                </div>
                <span>We understand risks and appreciate your trust. Thus, we offer advice and support your
                    negotiations.</span>
                <br />
                <a href="#" class="read-more">XEM THEM</a>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
