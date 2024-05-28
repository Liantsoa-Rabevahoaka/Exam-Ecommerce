import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product.js"

export const ShopContext = createContext(null);

//fonction ou on passe les accesoires
const ShopContextProvider = (props) =>{

    const contextValue = {all_product}; //stock the data

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider