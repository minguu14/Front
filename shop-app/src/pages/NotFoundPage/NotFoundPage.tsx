import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className="page">
        <div className="container">
            <div className={styles.not_found}>
                <img src="img/not-found.png" alt="Not Found Page" />
                <p>페이지를 찾을 수 없습니다.</p>
                <p>
                    <Link to={"/"}>홈페이지로 이동</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage