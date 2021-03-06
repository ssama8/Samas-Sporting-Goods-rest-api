const container = document.querySelector(".products-container");
const categories = new Set();
const companies = new Set();
console.log(container);
const fetchData = async () => {
	try {
		const response = await (await fetch("/api/products")).json();
		console.log(response);
		populatePage(response);
	} catch (error) {
		console.log(error);
	}
};
const populatePage = (arr) => {
	console.log(arr);
	const products = arr
		.map((product) => {
			const { image, name, company, id, category } = product;
			categories.add(category);
			companies.add(company);
			return `<img  onClick = "sendID('${id}')" style = "height:100px; width: 100px;  "src = ${image} alt = ${name} />`;
		})
		.join("");
	container.innerHTML = products;
	console.log(categories);
	console.log(companies);
};
const sendID = (id) => {
	console.log(id);
	const response = fetch(`api/single-product?id=${id}`)
		.then((data) => data.json())
		.then((resp) => console.log(resp));
};

fetchData();
