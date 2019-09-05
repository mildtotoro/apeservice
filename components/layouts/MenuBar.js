import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

import logo from "../../assets/images/ape-service-logo.png";

export default class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <div className="text-right text-light font-weight-light bg-primary pr-2 pt-1">
          <span className="h6 font-weight-light">สามารถติดต่อได้ทาง </span>
          <a className="text-light" target="_blank" href="https://www.facebook.com/pg/%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%99%E0%B8%B1%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B9%86%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-2223337804401717/about/?ref=page_internal">
            <FontAwesomeIcon className="h5 mb-0" icon={faFacebookSquare} /> Facebook
          </a>
          <span className="px-2">|</span>
          <a className="text-light" href="https://www.messenger.com/t/2223337804401717" target="_blank">
            <FontAwesomeIcon className="h5 mb-0" icon={faFacebookMessenger} /> Messenger
          </a>
          <span className="px-2 d-none d-lg-inline-block">|</span>
          <div className="d-block d-lg-none"></div>

          <a className="text-light " target="_blank" href="#shopee">Shopee</a>
          <span className="px-2">|</span>
          <a className="text-light " target="_blank" href="#3">Lazada</a>
          <span className="px-2">|</span>
          <a className="text-light" href="tel: 02-749-1230-2">Tel. 02-749-1230-2 </a>
        </div>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              alt="ape service"
              src={logo}
              // width="30"
              height="38"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <a className="nav-link">หน้าหลัก</a>
              </Link>
              <Link href="/service">
                <a className="nav-link">บริการ</a>
              </Link>
              <Nav.Link
                target="_blank"
                href="http://www.daikin.co.th/service-btu-calculation/"
              >
                คำนวน BTU
              </Nav.Link>
              <Link href="/products">
                <a className="nav-link">สินค้า</a>
              </Link>
              <Link href="/show-case">
                <a className="nav-link">ตัวอย่างผลงาน</a>
              </Link>
              <Link href="/about-us">
                <a className="nav-link">เกี่ยวกับเรา</a>
              </Link>
              <Link href="/contact-us">
                <a className="nav-link">ติดต่อเรา</a>
              </Link>
              <Link href="/how-to-order">
                <a className="nav-link">วิธีการชำระเงิน</a>
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
