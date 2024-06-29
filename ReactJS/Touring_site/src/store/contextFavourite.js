import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favouriteItems: [],
    addFavouriteItems: () => { },
    removeFavouriteItems: () => { },
    isFavouriteItems: () => { }
});

export function ContextFavourite(props) {

    const [userFavourite, setUserFavourite] = useState([]);

    // add
    const addFavouriteItems = (product) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.concat(product);
        })
    }

    // remove
    const removeFavouriteItems = (id) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.filter(product => product._id !== id);
        })
    }

    // check
    const isFavouriteItems = (id) => {
        return userFavourite.some(product => product._id === id);
    }

    const context = {
        favouriteItems: userFavourite,
        addFavouriteItems: addFavouriteItems,
        removeFavouriteItems: removeFavouriteItems,
        isFavouriteItems: isFavouriteItems
    }
    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;