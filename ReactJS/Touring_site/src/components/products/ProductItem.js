import Styles from "./PeoductItem.module.css"
import CustomWrapper from "../layouts/CustomWrapper";
import FavouriteContext from "../../store/contextFavourite";
import { useContext } from "react";

function ProductItem(props) {

    const favouriteContext = useContext(FavouriteContext);

    const isFavourite = favouriteContext.isFavouriteItems(props.item._id);

    const toggleFavourite = () => {
        if (isFavourite) {
            favouriteContext.removeFavouriteItems(props.item._id);
            
        } else {
            favouriteContext.addFavouriteItems({ ...props.item });
            
        }
    }

    return <li key={props.item._id} >
        <CustomWrapper>
            <div className={Styles.image}>
                <img src={props.item.image} alt="NO" ></img>
            </div>
            <div className={Styles.content}>
                <h1>{props.item.product_name}</h1>
                <p>{props.item.description}</p>
                <h3>{props.item.price}</h3>
            </div>
            <div className={Styles.btn}>
                <button>Purchase</button>
            </div>
            <div>
                <button className={isFavourite?Styles.heartfvrt:Styles.heartUnfvrt} onClick={toggleFavourite}></button>
            </div>
        </CustomWrapper>
    </li>
}

export default ProductItem;