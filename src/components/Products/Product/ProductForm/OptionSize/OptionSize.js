import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(sizes => <li><button type="button" onClick={ () => props.setCurrentSize(sizes)} className={clsx(sizes === props.currentSize && styles.active)}>{sizes.name}</button></li>)}
            </ul>
          </div>
    )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.object.isRequired
};

export default OptionSize; 