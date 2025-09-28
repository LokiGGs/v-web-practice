
result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
* }
**/

function groupByCategory(data) {
  const result = {};
  
  data.products.forEach(product => {
    const category = product.category;
    
    if (!result[category]) {
      result[category] = [];
    }
    
    result[category].push({
      productName: product.name,
      price: product.price
    });
  });
  
  return result;
}

const grouped = groupByCategory(result);
console.log(JSON.stringify(grouped, null, 0));
