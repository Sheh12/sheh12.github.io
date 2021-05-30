// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutFree: true,
		lactoseFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "bread",
		nutFree: true,
		lactoseFree: false,
		price: 2.35,
		organic: false
	},
	{
		name: "salmon",
		nutFree: false,
		lactoseFree: true,
		price: 10.00,
		organic: false
	},
		{
		name: "coffee",
		nutFree: true,
		lactoseFree: true,
		price: 1.00,
		organic: false
	},
		{
		name: "icecream",
		nutFree: false,
		lactoseFree: false,
		price: 5.00,
		organic: false
	},
		{
		name: "fried chicken",
		nutFree: true,
		lactoseFree: false,
		price: 20.00,
		organic: false
	},
		{
		name: "frozenpizza",
		nutFree: true,
		lactoseFree: false,
		price: 7.50,
		organic: false
	},
		{
		name: "apple",
		nutFree: true,
		lactoseFree: true,
		price: 0.50,
		organic: true
	},
		{
		name: "coke",
		nutFree: true,
		lactoseFree: true,
		price: 1.00,
		organic: false
	},	{
		name: "buns",
		nutFree: true,
		lactoseFree: true,
		price: 2.00,
		organic: true
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}