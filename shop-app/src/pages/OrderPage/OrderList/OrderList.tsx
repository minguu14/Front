import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useAuth } from "../../../hooks/useAuth"
import { fetchOrder } from "../../../store/order/orderSlice";
import CartEmpty from "../../../components/CartEmpty/CartEmpty";
import styles from "./OrderList.module.scss";
import OrderItem from "./OrderItem/OrderItem";


const OrderList = () => {
    const { id } = useAuth();
    const { order } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrder(id));
    },[id]);

    if(!order.length) return <CartEmpty title={"주문 내역"}/>

  return (
    <div className={styles.orders}>
        {order.map((item) => (
            <div key={item.id}>
                <div className={styles.order_header}>
                    <h3>주문 번호: {item.id}</h3>
                    <p>합계: $ {item.totalPrice.toFixed(2)}</p>
                </div>

                <ul className={styles.order_list}>
                    {item.products.map((order) => (
                        <OrderItem key={order.id} order={order}/>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default OrderList