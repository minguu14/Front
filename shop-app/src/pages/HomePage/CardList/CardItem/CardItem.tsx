import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import { IProduct } from "../../../../store/products/products-type";
import styles from "./CardItem.module.scss";

type CardItemProps = {
    item: IProduct;
}

const CardItem:React.FC<CardItemProps> = ( {item} ) => {
    const { products } = useAppSelector((state) => state.cart);
    const productMatching = products.some((el) => el.id === item.id);

  return (
    <li className={styles.card_item}>
        <Link to={`/products/${item.id}`}>
            <img 
            src={item.image} 
            alt="product card" 
            width={"80%"}
            height={"200px"}
            />
        </Link>

        <h5>{item.title.substring(0, 15)}...</h5>

        <div>
            <button disabled={productMatching}>
            {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
            </button>
            <p>$ {item.price}</p>
        </div>
    </li>
  )
}

export default CardItem