import styles from './ProductForm.module.scss'
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import Button from './Button/Button';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const ProductForm = (props) => {

    const getPrice = (basePrice, currentSize) => {
        return basePrice + currentSize.additionalPrice
      }
    
      const price = useMemo(() => {
        return getPrice(props.basePrice, props.currentSize);
      }, [props.basePrice, props.currentSize]);

    const sentOrder = (event, title, price, currentSize, currentColor) => {
        event.preventDefault();
        console.log(`
          Your Order:
          Name: ${title}
          Price: ${price}
          Size: ${currentSize.name}
          Color: ${currentColor}
        `);
      };

    return (
        <div>
        <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {price}$</span>
        </header>
        <form onSubmit={(event) => sentOrder(event, props.title, price, props.currentSize, props.currentColor)}>
                <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}  />
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
                <Button type="submit">
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
            </div>
    )
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default ProductForm