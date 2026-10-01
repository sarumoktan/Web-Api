let products = [
    { id: 1, name: "sunscreen", price: 1800 },
    { id: 2, name: "blush", price: 800 },
    { id: 3, name: "lipgloss", price: 300 }
];

// 1. CREATE PRODUCT
function createProduct(product) {
    return new Promise((resolve, reject) => {

        // Destructure product object
        let { id, name = "Unknown Product", price = 0 } = product;

        // Check if ID is missing
        if (id == null) {
            reject(new Error("Product ID is required"));
            return;
        }

        // Check if ID already exists
        let exists = products.some(p => p.id === id);

        if (exists) {
            reject(new Error("Product ID already exists"));
            return;
        }

        // Add new product
        let newProduct = { id, name, price };
        products.push(newProduct);

        resolve("Product created successfully");
    });
}

// Calling the function
createProduct({ id: 4, name: "mascara", price: 600 })
    .then(result => console.log(result))
    .catch(error => console.log(error.message));


    