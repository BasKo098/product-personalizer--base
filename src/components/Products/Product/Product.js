import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);


  return (
    <article className={styles.product}>
     <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
        <ProductForm title={props.title}
                      basePrice={props.basePrice} 
                      colors={props.colors} 
                      currentColor={currentColor} 
                      setCurrentColor={setCurrentColor} 
                      sizes={props.sizes} 
                      currentSize={currentSize} 
                      setCurrentSize={setCurrentSize} />
    </article>
  )
};

Product.propTypes = {
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;