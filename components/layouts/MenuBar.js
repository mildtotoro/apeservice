import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
// const logo = "../../static/assets/images/ape-service-logo.png";

import logo from "../../assets/images/ape-service-logo.png";

export default class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <div className="text-right text-light font-weight-light bg-dark">
          {/* <span className="h6 font-weight-light"></span>  */}
          <a className="text-light" href="">
            Facebook
          </a>
          <span className="px-2">|</span>
          <a href="">shopee</a>
          <span className="px-2">|</span>
          <a href="#3">lazada</a>
          <span className="px-2">|</span>
          <a href="#4">02-749-1230-2 </a> */}
        </div>

        <Navbar bg="light">
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
              <Nav.Link href="#home">หน้าหลัก</Nav.Link>
              <Nav.Link href="#link">บริการ</Nav.Link>
              <Nav.Link
                target="_blank"
                href="http://www.daikin.co.th/service-btu-calculation/"
              >
                คำนวน BTU
              </Nav.Link>

              <Nav.Link href="#product">สินค้า</Nav.Link>
              <Nav.Link href="#showcase">ตัวอย่างผลงาน</Nav.Link>
              <Nav.Link href="#aboutus">เกี่ยวกับเรา</Nav.Link>
              <Nav.Link href="#contactus">ติดต่อเรา</Nav.Link>
              <Nav.Link href="#contactus">วิธีการชำระเงิน</Nav.Link>
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
