import React, { useState } from 'react'
import './style.css'
import dotPng from '../../assets/img/top-nav-dot.png'
import logo from '../../assets/img/logo.png'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import {IoMenu} from 'react-icons/io5'
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import dot from '../../assets/img/dot.png'

export default function TopMenu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="menu">
      {/* top nav */}
      <div className="top-nav">
        <select>
          <option value="en">ENG</option>
          <option value="vi">VI</option>
        </select>
        <a href="#" style={{color: "white"}}>
          <TiSocialFacebook size={20} />
        </a>
        <a href="#" style={{color: "white"}}>
          <TiSocialTwitter size={20} />
        </a>
        <a href="#" style={{color: "white"}}>
          <TiSocialYoutube size={20} />
        </a>
        <a href="#"style={{color: "white"}}>
          <TiSocialInstagram size={20} />
        </a>
        <ul className="top-nav-menu d-lg-flex d-none align-items-center ml-auto justify-content-center mb-0">
          <li>
            <img src={dotPng} alt="" />
            <span>Chia sẻ Design</span>
          </li>
          <li>
            <img src={dotPng} />
            <span>Chia sẻ Code</span>
          </li>
          <li>
            <img src={dotPng} />
            <span>VỆ TINH BLOCKCHAIN</span>
          </li>
          <li>
            <img src={dotPng} />
            <span>VỆ TINH CODE</span>
          </li>
        </ul>
      </div>

      {/* main menu */}
      <Navbar style={{display: "flex", alignItems: "center", maxWidth: "100vw", boxSizing: "border-box"}} expand="md">
        <NavbarBrand href='#'>
          <img src={logo} alt="" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <IoMenu color="black" size={20} onClick={toggle} className="d-md-none d-block" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="d-flex ml-auto">
            <NavItem>
              <NavLink href="#">TRANG CHỦ</NavLink>
            </NavItem>
            <NavItem className="nav-dot"><img src={dot} /></NavItem>
            <NavItem>
              <NavLink href="#">VỀ CHÚNG TÔI</NavLink>
            </NavItem>
            <NavItem className="nav-dot"><img src={dot} /></NavItem>
            <NavItem>
              <NavLink href="#">DỊCH VỤ</NavLink>
            </NavItem>
            <NavItem className="nav-dot"><img src={dot} /></NavItem>
            <NavItem>
              <NavLink href="#">SẢN PHẨM</NavLink>
            </NavItem>
            <NavItem className="nav-dot"><img src={dot} /></NavItem>
            <NavItem>
              <NavLink href="#">TIN TỨC</NavLink>
            </NavItem>
            <NavItem className="nav-dot"><img src={dot} /></NavItem>
            <NavItem>
              <NavLink href="#">LIÊN HỆ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  )
}
