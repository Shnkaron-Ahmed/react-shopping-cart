//Initialize the cart state from localStorage or use the default initial state
export const initialState = JSON.parse(localStorage.getItem("cart_items")) || {

    total: 0,
    products: [],
};
// Reducer function to manage the shopping cart state
const shopReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
           // Handle adding an item to the cart
        case "ADD_TO_CART":
            return {
                ...state,
                products: payload.products
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: payload.products// Update products in the cart
            };
              // Handle calculating the total price of items in the cart
        case "CALCULATE_TOTAL_PRICE":
            return {
                ...state,
                total: payload.total
            };
             // Handle clearing the cart
        case "CLEAR_CART":
            return initialState;
              // Handle unknown actions
        default:
            throw new Error("unkown reducer");// Throw an error for unrecognized actions
    }
};


export default shopReducer;