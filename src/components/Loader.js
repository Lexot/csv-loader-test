import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import Order from './Order.js';
import Product from './Product';
import Category from './Category';

class Loader extends Component {

  handleForce = (results) => {
    var categories = [];
    var products = [];
    var orders = [];

    for (let i = 1; i < results.length; i++) {
      let element = results[i];

      categories.push(new Category(element[15], element[16]));

      products.push(new Product(element[17], /*element[1],*/ element[4], categories[i - 1]));

      if (i === 1) {
        orders.push(new Order(element[1], element[2], element[3], /* element[4], */ products[i - 1]));
      } else {
        var repeatedId = -1;

        for (let j = 0; j < orders.length; j++) {
          if (element[1] === orders[j].orderId) {
            repeatedId = j;
            orders[j].products.push(products[i - 1]);
          }
        }

        if (repeatedId === -1) {
          orders.push(new Order(element[1], element[2], element[3], /* element[4], */ products[i - 1]));
        }
      }
    }

    /* console.log(categories, "Categories");
    console.log(products, "Products"); */
    console.log(orders, "Orders");
  }

  render() {
    return (
      <CSVReader
        cssClass="csv-reader-input"
        label="Test"
        onFileLoaded={this.handleForce}
        inputId="ObiWan"
        inputStyle={{ color: 'red' }}
      />
    );
  }
}

export default Loader;