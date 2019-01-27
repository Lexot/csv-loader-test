class Order {
  constructor(orderId, orderDate, orderPriority, product, orderQuantity) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.orderPriority = orderPriority;
    this.products = [{ orderQuantity: orderQuantity, product: product }];
    product.orders.push(this);
  }
}

export default Order;