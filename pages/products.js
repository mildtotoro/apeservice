import React from "react";
import Layout from "../components/layouts/Layout";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import Slider from "../components/products/slider";
import product1 from '../assets/images/homeair/homeair1.jpg';
import samsung from '../assets/images/logo-partner/samsung.png';
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import productDaikin from '../assets/product/daikin.js';
import productUniaire from '../assets/product/uni-aire.js';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showProducts: [],
    }
  }

  componentDidMount(props, state) {
    this.setState({
      products: [
        ...productDaikin,
        ...productUniaire
      ],
      showProducts: [
        ...productDaikin,
        ...productUniaire
      ]
    });
  }

  filterByBrand = (brand) => {
    // todo: when click same btn mean see all product
    this.setState((state) => {
      const showProducts = state.products.filter((product) => {
        return product.brand === brand
      })
      return {
        ...state,
        showProducts
      }
    })
  }

  filterByBtu = (e) => {
    console.log(e.target.value)
  }

  filterByPrice = () => {

  }

  render() {
    const { showProducts } = this.state;
    console.log({ showProducts })
    return (
      <Layout>
        <Container className="page-product">
          <Row>
            <Col className="text-center">
              <div className="border p-3 mt-5 bg-primary">
                <Slider></Slider>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="py-5 h5">
              <div className="pb-3 font-weight-light">
                <div className="d-flex flex-row">
                  <div className="p-2">ยี่ห้อ</div>
                  <div className="p-2">
                    <button onClick={() => { this.filterByBrand('carrier') }} className="btn btn-outline-primary btn-sm">Carrier</button>
                    <button onClick={() => { this.filterByBrand('daikin') }} className="btn btn-outline-primary btn-sm mx-2">Daikin</button>
                    <button onClick={() => { this.filterByBrand('uni-aire') }} className="btn btn-outline-primary btn-sm">Uni-aire</button>
                  </div>
                  <div className="p-2">
                    เรียงโดย
                  </div>
                  <div className="p-2">
                    <select defaultValue='ราคา' className="d-inline-block form-control-sm">
                      <option >ราคา</option>
                      <option value="">ราคา จากน้อยไปมาก</option>
                      <option value="">ราคา จากมากไปน้อย</option>
                    </select>
                  </div>
                  <div className="p-2">
                    BTU
                  </div>
                  <div className="p-2">
                    <select name="" onChange={this.filterByBtu} defaultValue="all" id="" className="d-inline-block form-control-sm">
                      <option value="all">All</option>
                      <option value={9000}>9,000 - 11,999</option>
                      <option value={12000}>12,000 - 17,999</option>
                      <option value={18000}>18,000 - 23,999</option>
                      <option value={24000}>24,000 - 29,999</option>
                      <option value={30000}>มากกว่า 30,000</option>
                    </select>
                  </div>

                  <div className="ml-auto">
                    <div className="btn-card d-inline-block mr-2">
                      <div className="square square-1"></div>
                      <div className="square square-2"></div>
                      <div className="square square-3"></div>
                      <div className="square square-4"></div>
                    </div>
                    <div className="btn-list d-inline-block">
                      <div className="item item-1"></div>
                      <div className="item item-2"></div>
                      <div className="item item-3"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-12 col-lg-6"> */}
                {showProducts.map((product) => {
                  return (
                    <div key={product.name} className="col-12 col-lg-6 mt-4">
                      <div className="product border">
                        <div className="row no-gutters h-100">
                          <div className="col-12 col-sm-6 d-flex position-relative">
                            {/* <span className="badge badge-secondary position-absolute">New</span> */}
                            <div className="brand"><img src={samsung} alt="" /></div>
                            <img className="img-fluid align-self-center" height="300" src={'./static/assets/products/' + product.brand + '/' + product.imageName} alt="" />

                            <div className="btu pt-1 pb-2">
                              {product.btu.map(item => {
                                return <span key={product.name + item} className="badge badge-light font-weight-light border mr-1">{item} BTU/H</span>
                              })}
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="p-2 p-lg-3">
                              <h4 className="name mb-0">{product.name}</h4>
                              {/* <div className="btu pt-1 pb-2">
                                {product.btu.map(item => {
                                  return <span key={product.name + item} className="badge badge-light font-weight-light border mr-1">{item} BTU/H</span>
                                })}
                              </div> */}
                              <div className={(product.price === '') ? 'd-none' : 'price pt-2'} >
                                ฿ {product.price}
                                <span className={(product['old-price'] === '') ? 'd-none' : 'old-price pl-3 pt-2 h6'}>฿ {product["old-price"]}</span>
                              </div>
                              <p className="h6 pt-2 description">
                                {product.description}
                              </p>
                              {/* <button className="btn btn-link">more</button> */}
                              <div className="">
                                <FontAwesomeIcon className="h5 mb-0 pr-2" icon={faFacebookMessenger} />
                                <a href="#f" className="text-primary btn btn-link">สอบถาม/สั่งซื้อสินค้า </a>
                              </div>
                              <span className="btn-catalog text-dark">
                                <a href={product.catalogLink} target="_blank">Catalog</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* <div className="product border">
                  <div className="row">
                    <div className="col-12 col-sm-6 d-flex position-relative">
                      <span className="badge badge-secondary position-absolute">New</span>
                      <div className="brand"><img src={samsung} alt="" /></div>
                      <img className="img-fluid align-self-center" src={product1} alt="" />
                      <span className="btn-catalog text-dark">
                        <a href="http://www.centralair.co.th/product/catalog/walltype/2016_CFW-IVH.pdf" target="_blank">Catalog</a>
                      </span>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="p-2 p-lg-4">
                        <h4 className="name mb-0">GEMINI 42TEVGB</h4>
                        <div className="btu pb-2">
                          <span className="badge badge-light">25,100 BTU/H</span>
                        </div>
                        <div className="price pt-2">
                          ฿ 10,500
                          <span className="old-price pl-3 pt-2 h6">฿ 11,500</span>
                        </div>
                        <p className="h6 pt-2">
                          rem aliquam porro repellendus harum quae accusantium eius iste. Ipsa quis eveniet saepe.
                        </p>
                        <div className="">
                          <FontAwesomeIcon className="h5 mb-0 pr-2" icon={faFacebookMessenger} />
                          <a href="#f" className="text-primary btn btn-link">สอบถาม/สั่งซื้อสินค้า </a>
                        </div>
                      </div>
  
                    </div>
                  </div>
  
                </div> */}
              </div>
            </Col>
          </Row>
        </Container >
      </Layout >
    );
  }
}

export default Products;
