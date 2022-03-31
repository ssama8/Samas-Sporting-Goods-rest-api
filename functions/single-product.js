const items = require("../data/products");
exports.handler = (event, context) => {
	// const url = event.rawUrl.toString().split("=")[1];
	// console.log(url);
	// console.log("request");
	// const id = event.body;
	// const singleProduct = items.find((item) => item.id === url);
	// console.log(singleProduct);
	// if (singleProduct) {
	// 	return {
	// 		headers: {
	// 			"Access-Control-Allow-Origin": "*",
	// 		},
	// 		statusCode: 200,
	// 		body: JSON.stringify(singleProduct),
	// 	};
	// } else {
	// 	return {
	// 		headers: {
	// 			"Access-Control-Allow-Origin": "*",
	// 		},
	// 		statusCode: 400,
	// 		body: "Product Not Found",
	// 	};
	// }
	return {
		statusCode: 200,
		body: "is the extra id the problem?",
	};
};
