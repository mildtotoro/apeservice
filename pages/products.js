import React from "react";
import Layout from "../components/layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../components/products/slider";
import ProductCard from "../components/products/ProductCard";
import productDaikin from '../assets/product/daikin.js';
import productUniaire from '../assets/product/uni-aire.js';
import productCarrier from '../assets/product/carrier.js';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showProducts: [],
      filter: {
        brand: null
      }
    }
    this.selectPrice = React.createRef();
    this.selectBtu = React.createRef();
  }

  componentDidMount(props, state) {
    const products = [
      ...productDaikin,
      ...productUniaire,
      ...productCarrier
    ];

    const newProducts = products.map((product) => {
      // let priceNum = [...product.price]
      const btuValues = product.btu.map((item) => {
        item = item.replace(",", "");
        return parseInt(item);
      })
      return {
        ...product,
        btuValues
      }
    });

    this.setState({
      products: newProducts,
      showProducts: newProducts
    });
  }

  filterByBrand = (brand) => {
    this.selectBtu.current.value = 'all';
    this.selectPrice.current.value = 'ราคา';

    this.setState((state) => {
      if (brand === state.filter.brand) {
        return {
          filter: {
            brand: null
          },
          showProducts: state.products
        }
      } else {
        const showProducts = state.products.filter((product) => {
          return product.brand === brand
        })

        return {
          filter: {
            brand
          },
          showProducts
        }
      }
    })
  }

  filterByBtu = (e) => {
    const value = e.target.value;

    // const btuMap = {
    //   9000: { max: 11999 },
    //   12000: { max: 17999 },
    //   18000: { max: 23999 },
    //   24000: { max: 29999 },
    // }

    this.setState((state) => {
      let newShowProducts = [];
      let products = state.products;
      if (state.filter.brand !== null) {
        products = state.products.filter((product) => {
          return product.brand === state.filter.brand;
        });

        console.log({ products });

      }

      if (value === 'all') {
        newShowProducts = products;
      } else {
        newShowProducts = products.filter((product) => {
          return product.btuValues.some((btu) => {
            return btu > value
          })
        })
      }

      return {
        showProducts: newShowProducts
      }
    })
  }

  filterByPrice = (e) => {
    console.log(e.target.value)
  }

  showMoreDescription = (text) => {
    return text.substring(150);
  }

  showDescription = text => {
    return text.substring(0, 149) + '-'
  }

  render() {
    const { showProducts, filter: { brand } } = this.state;
    console.log(this.state)

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
                    <button onClick={() => { this.filterByBrand('carrier') }} className={(brand === 'carrier') ? 'btn btn-success btn-sm' : 'btn btn-outline-primary btn-sm'}>Carrier</button>
                    <button onClick={() => { this.filterByBrand('daikin') }} className={(brand === 'daikin') ? 'btn btn-success btn-sm mx-2' : 'btn btn-outline-primary btn-sm mx-2'}>Daikin</button>
                    <button onClick={() => { this.filterByBrand('uni-aire') }} className={(brand === 'uni-aire') ? 'btn btn-success btn-sm' : 'btn btn-outline-primary btn-sm'}>Uni-aire</button>
                  </div>
                  <div className="p-2">
                    เรียงโดย
                  </div>
                  <div className="p-2">
                    <select ref={this.selectPrice} defaultValue='ราคา' onChange={this.filterByPrice} className="d-inline-block form-control-sm">
                      <option >ราคา</option>
                      <option value="min">ราคา จากน้อยไปมาก</option>
                      <option value="max">ราคา จากมากไปน้อย</option>
                    </select>
                  </div>
                  <div className="p-2">
                    BTU
                  </div>
                  <div className="p-2">
                    <select ref={this.selectBtu} onChange={this.filterByBtu} defaultValue="all" id="" className="d-inline-block form-control-sm">
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
                {showProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.name}
                      product={product}
                    />
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container >
      </Layout >
    );
  }
}

export default Products;
