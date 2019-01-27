class Product {
  constructor(productName, category, subCategory) {
    this.productName = productName;
    this.categories = [category];
    this.subCategory = subCategory;
    this.orders = [];
    category.products.push(this);
  }
}

export default Product;