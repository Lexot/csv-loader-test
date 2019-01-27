import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import Order from './Order.js';
import Product from './Product';
import Category from './Category';

class Loader extends Component {
  readFile = (results) => {
    let categories = [];
    let products = [];
    let orders = [];
    //let startTime = new Date();

    for (let i = 1; i < results.length - 1; i++) {
      let row = results[i];
      let categoryName = row[15];
      let categoryIndex = -1;

      for (let j = 0; j < categories.length; j++) {
        if (categoryName === categories[j].categoryName) {
          categoryIndex = j;
          break;
        }
      }

      if (categoryIndex === -1) {
        let category = new Category(categoryName);
        categories.push(category);
        categoryIndex = categories.length - 1;
      }

      let productName = row[17];
      let subcategoryName = row[16];
      let productIndex = -1;

      for (let j = 0; j < products.length; j++) {
        if (productName === products[j].productName) {
          productIndex = j;
          break;
        }
      }

      if (productIndex === -1) {
        let product = new Product(productName, categories[categoryIndex], subcategoryName);
        products.push(product);
        productIndex = products.length - 1;
      }

      let orderId = row[1];
      let orderDate = row[2];
      let orderPriority = row[3];
      let orderQuantity = row[4];
      let orderIndex = -1;

      for (let j = 0; j < orders.length; j++) {
        if (orderId === orders[j].orderId) {
          orderIndex = j;
          orders[orderIndex].products.push({ orderQuantity: orderQuantity, product: products[productIndex] });
          products[productIndex].orders.push(orders[orderIndex]);
          break;
        }
      }
      if (orderIndex === -1) {
        orders.push(new Order(orderId, orderDate, orderPriority, products[productIndex], orderQuantity));
      }
    }

    //let endTime = new Date();
    //let executionTime = endTime.getTime() - startTime.getTime();
    //console.log("ms", executionTime);
    console.log(orders, "Orders");
    console.log(products, "Products");
    console.log(categories, "Categories");
  }

  render() {
    return (
      <CSVReader
        cssClass="csv-reader-input"
        label="Test"
        onFileLoaded={this.readFile}
        inputId="ObiWan"
        inputStyle={{ color: 'red' }}
      />
    );
  }
}

export default Loader;