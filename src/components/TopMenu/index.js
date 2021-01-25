import React from 'react'
import './style.css'

export default function TopMenu() {
  return (
    <div class="menu">
      {/* top nav */}
      <div class="top-nav d-flex align-items-center">
        <select>
          <option value="en">ENG</option>
          <option value="vi">VI</option>
        </select>
        <a href="#">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-google-plus" aria-hidden="true"></i>
        </a>
        <ul class="top-nav-menu d-flex align-items-center ml-auto justify-content-center mb-0">
          <li>
            <img src={require("../../../assets/img/top-nav-dot.png")} alt="" />
            <span>Chia sẻ Design</span>
          </li>
          <li>
            <img src="assets/img/top-nav-dot.png" alt="" />
            <span>Chia sẻ Code</span>
          </li>
          <li>
            <img src="assets/img/top-nav-dot.png" alt="" />
            <span>VỆ TINH BLOCKCHAIN</span>
          </li>
          <li>
            <img src="assets/img/top-nav-dot.png" alt="" />
            <span>VỆ TINH CODE</span>
          </li>
        </ul>
      </div>

      {/* main menu */}
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img src="assets/img/logo.png" alt="" />
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-md-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">TRANG CHỦ</a>
            </li>
            <li class="nav-item nav-dot">
              <img src="assets/img/dot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">VỀ CHÚNG TÔI</a>
            </li>
            <li class="nav-item nav-dot">
              <img src="assets/img/dot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">DỊCH VỤ</a>
            </li>
            <li class="nav-item nav-dot">
              <img src="assets/img/dot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SẢN PHẨM</a>
            </li>
            <li class="nav-item nav-dot">
              <img src="assets/img/dot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TIN TỨC</a>
            </li>
            <li class="nav-item nav-dot">
              <img src="assets/img/dot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
