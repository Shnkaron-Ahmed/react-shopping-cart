import useShop from "../ShopContext";
import { IoClose } from "react-icons/io5";

// Define the CartProducts component which receives 'products' as a prop.
const CartProducts = ({ products }) => {
	const { total, removeFromCart } = useShop();
 
	// Destructure 'total' and 'removeFromCart' from the useShop hook
	return (
		<>
			<div className="cart-products">
				<h2>Cart Products</h2>
				 {/* Iterate over the products array to display each product */}
				{products.map((product) => (
					<div className="cart-product">
						<div className="cart-title-img">
							<img src={product.urlImage} alt="" />
							<span>{product.name}</span>
						</div>
						   {/* Display product price */}
						<h5>${product.price}</h5>
						  {/* Display product image and name */}
						<span className="delete" onClick={() => removeFromCart(product)}>
							<IoClose />
						</span>
					</div>
				))}
				{/* Display the total price of all products in the cart */}
				<div className="total-price">
					{/* <h4>Total Price</h4> */}
					<h2>Total Price : ${total}</h2>
				</div>
			</div>
		</>
	);
};

export default CartProducts;
