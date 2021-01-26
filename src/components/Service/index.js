import React, { useEffect, useState } from 'react'
import { services } from './services'
import { Container, Row, Col } from 'reactstrap'
import './style.css'
import { wowInit } from '../wow'

export default function Service() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    wowInit()
  }, [])

  const rightBlockItem = (item) => {
    return (
      <div className="right-block-wrapper">
        <p>{item.name}</p>
        <span style={{ lineHeight: "24px" }}>{item.content[0]}</span>
        <div className="service-detail">
          <span style={{ lineHeight: "24px" }}>{item.content[1]}</span>
          <img src={item.contentImg} alt="" style={{ marginLeft: 20 }} />
        </div>
        <span style={{ lineHeight: "24px" }}>{item.content[2]}</span>
        <br />
        <a href="#" className="read-more">XEM THÊM</a>
      </div>
    )
  }

  const leftBlockItem = (item, i) => {
    return (
      <div
        className={`block-item ${index === i && 'active'}`}
        onClick={() => setIndex(i)}
        key={"leftBlock" + i}>
        <div className="block-img">
          <img src={item.inactiveImg} alt="" />
          <img src={item.activeImg} alt="" />
        </div>
        <span>{item.name}</span>
      </div>
    )
  }

  return (
    <div className="service wrapper">
      <div className="service-content">
        <div className="top-content">
          <div className="title">DỊCH VỤ - BYTESOFT</div>
          <span className="wow fadeInDown">Với tiêu chí "Chất lượng hơn số lượng. ByteSoft luôn tạo ra những sản phẩm có giá
          trị
          cao nhất". Đến với
              chúng tôi, khách hàng sẽ luôn được cung cấp những dịch vụ tốt nhất</span>
        </div>
        <div className="service-block">
          <Container className="d-flex justify-content-center align-items-center p-0">
            <Row>
              <Col xl="5" className="left-block align-self-center wow fadeInLeft">
                {
                  services.map((item, index) => {
                    return leftBlockItem(item, index)
                  })
                }
              </Col>

              <Col xl="7" className="right-block wow fadeInDown">
                {rightBlockItem(services[index])}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}
