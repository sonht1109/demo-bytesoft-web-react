import React from 'react'
import whyIcon from '../../assets/img/why-icon.png'
import centerPhone from '../../assets/img/iphone-services.png'
import { Container, Row, Col } from 'reactstrap'
import './style.css'

export default function Why() {
  return (
    <div className="why d-flex justify-content-center align-items-center wrapper">
      <div className="why-title d-flex flex-column justify-content-center">
        <p className="text-center title">TẠI SAO CHỌN BYTESOFT ?</p>
        <span className="text-center wow fadeInDown">Chi phí thấp – Giá trị lớn – Chuyên nghiệp - Độc đáo - Tin cậy - Riêng
        biệt - Thành
          công</span>
      </div>
      <div className="why-detail">
        <Container className="p-0">
          <Row>
            <Col lg="4" className="p-0 d-flex justify-content-center flex-column">
              <div className="why-item wow fadeInLeft">
                <div className="why-item-title d-flex flex-lg-row-reverse flex-row position-relative justify-content-start">
                  <img src={whyIcon} className="position-absolute" />
                  <span>Về chuyên môn</span>
                </div>
                <p className="text-lg-right">Đội ngũ chuyên viên dày dặn kinh nghiệm với ý tưởng táo bạo, thiết
                kế đột phá. Phần mềm giống như bộ
                xương của công nghệ thông tin. Bộ xương càng chắc, bạn càng đi xa.
                </p>
              </div>

              <div className="why-item wow fadeInLeft">
                <div className="why-item-title d-flex flex-row-reverse  position-relative justify-content-start">
                  <img src={whyIcon} className="position-absolute" />
                  <span>Dịch vụ khách hàng</span>
                </div>

                <p className="text-right">Trách nhiệm đặt lên hàng đầu, tư vấn hỗ trợ nhiệt tình, chúng tôi
                luôn nỗ lực để “vui lòng khách đến vừa lòng khách đi
                </p>
              </div>
            </Col>
            <Col lg="4" className="p-0 d-lg-flex d-none justify-content-center phone wow zoomIn">
              <img src={centerPhone} alt="" />
            </Col>
            <Col lg="4" className="p-0 d-flex flex-column justify-content-center">
            <div className="why-item wow fadeInRight">
                <div className="why-item-title d-flex position-relative justify-content-start">
                  <img src={whyIcon} className="position-absolute" />
                  <span>Bức tường bảo mật</span>
                </div>

                <p className="text-lg-left text-center">“Nền tảng Blockchain, nền tảng không phải doanh nghiệp nào cũng có”,
                Blockchain được mã hóa hết sức cầu kỳ để ngăn chặn tuyệt đối việc giả mạo thông tin và có thể lưu lại
                vĩnh...
                </p>
              </div>

              <div className="why-item wow fadeInRight">
                <div className="why-item-title d-flex position-relative justify-content-start flex-row-reverse flex-lg-row">
                  <img src={whyIcon} className="position-absolute" />
                  <span>Đồng hành đến cùng</span>
                </div>

                <p className="text-lg-left text-center">Dịch vụ chăm sóc sau bàn giao sản phẩm hỗ trợ 24/24. Chúng tôi làm
                tới khi bạn hài lòng. Nhắc tới Bytesoft- Nhắc tới thành công.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
