const products = [
  { id: 101, name: "iPhone", price: 20000 }
];

// 1. CREATE PRODUCT
function createProduct(product) {
  return new Promise((resolve, reject) => {
    const { id, name, price } = product;

    // Check if ID already exists
    const existingProduct = products.find(p => p.id === id);

    if (existingProduct) {
      reject(new Error("Product ID already exists"));
      return;
    }

    // Default values
    const newProduct = {
      id: id,
      name: name || "Unknown Product",
      price: price || 0
    };

    products.push(newProduct);

    resolve(newProduct);
  });
}


// 2. GET ALL PRODUCTS
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}


// 3. GET PRODUCT BY ID
function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);

      if (!product) {
        reject(new Error("Product not found"));
        return;
      }

      resolve(product);
    }, 1000);
  });
}


// 4. SEARCH PRODUCT
function searchProduct(name) {
  return new Promise((resolve) => {
    const result = products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    if (result.length === 0) {
      resolve({});
    } else {
      resolve(result);
    }
  });
}


// 5. UPDATE PRODUCT
function updateProduct(id, update) {
  return new Promise((resolve, reject) => {
    const product = products.find(p => p.id === id);

    if (!product) {
      reject(new Error("Product not found"));
      return;
    }

    const { name, price } = update;

    if (name !== undefined) {
      product.name = name;
    }

    if (price !== undefined) {
      product.price = price;
    }

    resolve(product);
  });
}


// 6. DELETE PRODUCT
function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
      reject(new Error("Product not found"));
      return;
    }

    products.splice(index, 1);

    resolve("Product deleted successfully");
  });
}