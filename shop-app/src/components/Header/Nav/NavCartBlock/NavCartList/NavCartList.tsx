import { useAppSelector } from "../../../../../hooks/redux";
import NavCartItem from "./NavCartItem/NavCartItem";
import styles from "./NavCartList.module.scss";

const NavCartList = () => {
    const { products } = useAppSelector((state) => state.cart);

  return (
    <div className={styles.nav_cart_list}>
        {products.map((item) => (
            <NavCartItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default NavCartList