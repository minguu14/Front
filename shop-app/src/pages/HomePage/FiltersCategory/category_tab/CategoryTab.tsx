import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { CategoriesName } from "../../../../store/categories/categoriesType";
import styles from "./Category.module.scss";
import { setActiveCategory } from "../../../../store/categories/categorySlice";

type CategoryTabProps = {
    text: string,
    categoryName: CategoriesName,
}

const CategoryTab:React.FC<CategoryTabProps> = ({text, categoryName}) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.categories);

    // Props로 받아온 categoryName으로 설정.
    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName));
    }

  return (
    <button 
    className={categoryName === category ? styles.active_category : styles.category_button}
    onClick={getActiveCategory}
    >
    { text }
    </button>
  )
}

export default CategoryTab