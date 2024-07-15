import CartProducts from "../components/CartProducts";
// import Payment from "../components/Payment";
import useShop from "../ShopContext";

const Cart = () => {
      // Destructure 'products' from the useShop hook.
    const { products } = useShop();
  // Check if the products array is empty. If so, display a message indicating that the cart is empty.
    if (products.length == 0) return <h1>Cart Is Empty</h1>;
 
    // Return  the cart's products.
    return (
        // Container div with a maximum width
        <div className="container max-width: 768px" >
            <CartProducts products={products} />
           
        </div>
    );

};

export default Cart;