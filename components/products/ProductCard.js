import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import get from 'lodash/get';

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class ProductCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isShowPrices: false
    }
  }

  toggleShowPrices = () => {
    this.setState((state) => {
      return {
        isShowPrices: !state.isShowPrices
      }
    })
  }

  render() {
    const { isShowPrices } = this.state;
    const { product, mode } = this.props;
    const price = get(product, 'priceDisplayList[0]["price"]', 0);
    const btu = get(product, 'priceDisplayList[0]["btu"]', "");
    let classNameProduct = "product border";
    if (mode === 'list') {
      classNameProduct = classNameProduct + ' list';
      if (isShowPrices) {
        classNameProduct = classNameProduct + ' auto-height';
      }
    }
    console.log({ isShowPrices })
    return (
      <div className={(mode === 'list') ? 'col-12 col-lg-6 mt-4' : 'col-12 col-md-6 col-lg-4 mt-4'}>
        <div className={classNameProduct}>
          <div className="row no-gutters h-100">
            <div className={(mode === 'list') ? 'product-image-wrapper col-12 col-sm-6 d-flex position-relative' : 'col-12'}>
              {/* <span className="badge badge-secondary position-absolute">New</span> */}
              <div className="brand"><img width="70px" src={assetPrefix + '/static/assets/products/' + product.brand + '.png'} alt={'apeservice partner' + product.brand} /></div>
              <img className="img-fluid align-self-center" height="300" src={assetPrefix + '/static/assets/products/' + product.brand + '/' + product.imageName} alt={product.imageName} />

              <div className="btu pt-1 pb-2">
                {product.priceList.map(item => {
                  return <span key={product.name + item.btu} className="badge badge-light font-weight-light border mr-1">{item.btu} BTU/H</span>
                })}
              </div>
            </div>
            <div className={(mode === 'list') ? 'col-12 col-sm-6' : 'col-12'}>
              <div className="p-2 p-lg-3">
                <h2 className="name mb-0 h5">{product.name}</h2>
                <div className={(price === 0) ? 'd-none' : 'price pt-2'} >
                  ฿ {price}
                  <span style={{ fontSize: '16px' }} className="badge badge-light font-weight-light border ml-2">({btu} BTU)</span>

                </div>
                <div className={(product['old-price'] === '') ? 'd-none' : 'old-price h6'}>฿ {product["old-price"]}</div>

                <p className="h6 pt-2 description">
                  {product.description}
                </p>
                <div className="">
                  <FontAwesomeIcon size="1x" className="mb-0 pr-2" icon={faFacebookMessenger} />
                  <a href="#f" className="text-primary btn btn-link">สอบถาม/สั่งซื้อสินค้า </a>
                </div>
                <div className="row">
                  <div className="col-6 col-md-8">
                    <button onClick={this.toggleShowPrices} className="btn btn-outline-info btn-sm">ดูราคาสินค้าเพิ่มเติม</button>

                  </div>
                  <div className="col-6 col-md-3">
                    <span className="btn-catalog text-dark">
                      <a href={product.catalogLink} target="_blank">Catalog</a>
                    </span>
                  </div>
                </div>
                {isShowPrices ? <div className="table-responsive mt-2"><table className="table table-sm h6">
                  <thead>
                    <tr>
                      <td>ราคา</td>
                      <td>BTU</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.priceDisplayList.map(item => {
                      return (
                        <tr key={item.btu}>
                          <td>{item.price} บาท</td>
                          <td>{item.btu}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table></div> : null}



              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCard;
