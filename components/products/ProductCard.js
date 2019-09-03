import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class ProductCard extends React.Component {
  constructor(props) {
    super();

  }

  render() {
    const { product, mode } = this.props;
    return (
      <div className={(mode === 'list') ? 'col-12 col-lg-6 mt-4' : 'col-12 col-md-6 col-lg-4 mt-4'}>
        <div className={(mode === 'list') ? 'product list border' : 'product border'}>
          <div className="row no-gutters h-100">
            <div className={(mode === 'list') ? 'col-12 col-sm-6 d-flex position-relative' : 'col-12'}>
              {/* <span className="badge badge-secondary position-absolute">New</span> */}
              <div className="brand"><img width="70px" src={assetPrefix + '/static/assets/products/' + product.brand + '.png'} alt={'apeservice partner' + product.brand} /></div>
              <img className="img-fluid align-self-center" height="300" src={assetPrefix + '/static/assets/products/' + product.brand + '/' + product.imageName} alt={product.imageName} />

              <div className="btu pt-1 pb-2">
                {product.btu.map(item => {
                  return <span key={product.name + item} className="badge badge-light font-weight-light border mr-1">{item} BTU/H</span>
                })}
              </div>
            </div>
            <div className={(mode === 'list') ? 'col-12 col-sm-6' : 'col-12'}>
              <div className="p-2 p-lg-3">
                <h2 className="name mb-0 h5">{product.name}</h2>
                <div className={(product.price === '') ? 'd-none' : 'price pt-2'} >
                  ฿ {product.price}
                  <span className={(product['old-price'] === '') ? 'd-none' : 'old-price pl-3 pt-2 h6'}>฿ {product["old-price"]}</span>
                </div>
                <p className="h6 pt-2 description">
                  {product.description}
                </p>
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
  }
}

export default ProductCard;
