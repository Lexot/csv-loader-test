class Order {
  constructor(orderId, orderDate, orderPriority, /*orderQuantity,*/ product) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.orderPriority = orderPriority;
    //this.orderQuantity = orderQuantity;
    this.products = [product];
  }
}

export default Order;