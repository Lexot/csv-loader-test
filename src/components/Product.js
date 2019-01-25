class Product {
  constructor(productName, /*orderId,*/ orderQuantity, category) {
    this.productName = productName;
    //this.orderId = orderId;
    this.orderQuantity = orderQuantity;
    this.category = category;
  }
}

export default Product;