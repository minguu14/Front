import { useAppSelector } from "../../hooks/redux";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartList from "./CartList/CartList";
import CheckOut from "./CheckOut/CheckOut";

const CartPage = () => {
    const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="page">
        {!products.length ? (
            <CartEmpty title={"Cart"}/>
        ) : (
            <div className="container">
                <h1>장바구니</h1>
                <CartList/>
                <CheckOut/>
            </div>
        )}
    </div>
  );
}

export default CartPage