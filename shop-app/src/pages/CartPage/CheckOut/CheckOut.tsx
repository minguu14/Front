import styles from "./CheckOut.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { getTotalPrice, postOrder } from "../../../store/cart/cartSlice";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const CheckOut = () => {
    const cart = useAppSelector((state) => state.cart);

    const dispatch = useAppDispatch();

    const { isAuth } = useAuth();

    const sendOrder = () => {
        dispatch(postOrder(cart));
    }

    useEffect(() => {
        dispatch(getTotalPrice());
    },[cart]);

  return (
    <div className={styles.checkout}>
        <div>
            <p>
                <span>합계:</span> $ {cart.totalPrice.toFixed(2)}
            </p>
            {isAuth ? (
            <button
            className={styles.checkout_button}
            onClick={() => sendOrder()}
            >
                결제하기
            </button>
            ) : (
            <Link className={styles.checkout_button} to={"/login"}>
                로그인
            </Link>
            )}
        </div>
    </div>
  )
}

export default CheckOut