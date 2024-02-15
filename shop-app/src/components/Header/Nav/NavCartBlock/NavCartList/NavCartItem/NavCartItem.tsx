import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../../../hooks/redux";
import { deleteFromCart } from "../../../../../../store/cart/cartSlice";
import { IProduct } from "../../../../../../store/products/products-type";
import styles from "./NavCartItem.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

type NavCartProps = {
    item: IProduct;
}

const NavCartItem: React.FC<NavCartProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const deleteProduct = () => {
        dispatch(deleteFromCart(item.id));
    };

  return (
    <div className={styles.nav_cart_item}>
        <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="product card" />
        </Link>
        <div className={styles.nav_cart_description}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
            <span>
                {item.price} X {item.quantity} = $ {item.total.toFixed(2)}
            </span>
        </div>
        <button onClick={deleteProduct} className={styles.nav_cart_delete}>
            <AiOutlineDelete/>
        </button>
    </div>
  )
}

export default NavCartItem