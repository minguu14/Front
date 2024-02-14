import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import CartItem from "./CartItem/CartItem";
import styles from "./CartList.module.scss";

const CartList = () => {
    const { products } = useAppSelector((state) => state.cart);
  return (
    <div className={styles.cart_list}>
        {products.map((item) => (
            <CartItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default CartList