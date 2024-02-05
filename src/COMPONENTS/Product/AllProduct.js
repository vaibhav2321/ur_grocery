import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./AllProduct.css";
import fruits from "../../ASSETS/fruits.png";

const AllProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const products = data.map((item) => ({
    id: item._id,
    productimage: fruits, // You may replace this with the actual image URL from item.productImage
    productname: item.productName,
    productprice: item.productCost,
    counttype: item.productQuantity,
    discountpercent: 20,
  }));

  return (
    <div className="Allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
