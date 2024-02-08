import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProduct } from "../../store/products/productSlice";

import styles from "./Detail.module.scss";
import Loader from "../../components/Loader/Loader";

const DetailPage = () => {
    const { id } = useParams();
    const productId = Number(id);
    const dispatch = useAppDispatch();

    const { product, isLoading } = useAppSelector((state) => state.product);
    const { products } = useAppSelector((state) => state.products);
    const productMatching = products.some((item) => item.id === product.id);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    },[productId])

  return (
    <div className="page">
        { isLoading ? (<Loader />) : 
        (<div className={styles.card_wrapper}>
            <div className={styles.card_img}>
                <img 
                src={product.image}
                alt="product card" 
                />
            </div>
            <div className={styles.card_description}>
                <h3>{product.category}</h3>
                <h1>{product.title}</h1>

                <h4> $ {product.price}</h4>
                <p>{product.description}</p>
                <div>
                    <button disabled={productMatching}>
                        {productMatching ? "장바구니에 담긴 상품" : "장바구니에 담기"}
                    </button>

                    <Link to={"/cart"}>장바구니로 이동</Link>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default DetailPage