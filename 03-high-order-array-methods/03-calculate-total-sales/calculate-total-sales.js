function calculateTotalSalesWithTax(array, tax) {
  let totalSales = array.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let taxAmount = (totalSales * tax) / 100;
  return totalSales + taxAmount
}

const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

const result = calculateTotalSalesWithTax(products, 8);

console.log(result);

module.exports = calculateTotalSalesWithTax;
