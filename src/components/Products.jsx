import Product from "./Product";

const products = [
	{
		id: 1,
		name: "Eye Cream",
		urlImage:
	 	"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
		price: 75,
	},
	{
		id: 2,
		name: "Home Skin Care",
		urlImage:
		"https://media.istockphoto.com/id/1141698953/photo/spa-products-for-home-skin-care.webp?b=1&s=170667a&w=0&k=20&c=JzqLCaVnKh237TY-4ldl8yfPNPh-u13oCBlPPGYcFDA=",
		price: 150,
	},
	{
		id: 3,
		name: "Women's Perfumes ",
		urlImage:
		"https://images.unsplash.com/photo-1577058109956-67adf6edc586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDU3MDcwOXx8ZW58MHx8fHx8",
		price: 100,
	},
	{
		id: 4,
		name: "Set Perfumes",
		urlImage:
		"https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
		price: 60,
	},
	{
		id: 5,
		name: "Neauthy Skin Care",
		urlImage:
		"https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
		price: 200,
	},
	{
		id: 6,
		name: " Rejuvenating Serum",
		urlImage:
		"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbiUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
		price: 400,
	},
];

const Products = () => {
	return (
		<div className="grid">
			{products.map((product) => (
				<Product product={product} cart={false} />
			))}
		</div>
	);
};

export default Products;
