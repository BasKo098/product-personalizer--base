import { useState } from 'react';
import productsData from '../../data/products';
import Product from './Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(products => <Product key={products.id} {...products}></Product>)}
    </section>

    /*<section>
      <Product
        id={products[0].id}
        name={products[0].name}
        title={products[0].title}
        colors={products[0].colors}
        sizes={products[0].sizes}
        basePrice={products[0].basePrice} />
      <Product
        id={products[1].id}
        name={products[1].name}
        title={products[1].title}
        colors={products[1].colors}
        sizes={products[1].sizes}
        basePrice={products[1].basePrice} />
    </section>*/
  );
};

Product.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;