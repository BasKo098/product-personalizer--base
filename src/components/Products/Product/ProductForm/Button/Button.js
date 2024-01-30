import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = (props) => {
    return (<button type={props.type} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;