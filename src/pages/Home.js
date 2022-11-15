import { useState, useEffect } from "react";
import Product from "../components/Product/Product";
import axios from "axios";
import Iframe from "react-iframe";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const addToSelected = (item) => {
    setSelectedProducts([...selectedProducts, item]);
  };

  const removeFromSelected = (item) => {
    const deepClone = [...selectedProducts];
    const filtered = deepClone.filter((el) => el.id !== item.id);
    setSelectedProducts(filtered);
  };

  return (
    
    <div className="content">
      <div style={{marginLeft: "150px"}}><header>
        <Iframe url="https://www.youtube.com/embed/iSbDLAscjz8"
                
                width="640px"
                height="320px"
                display="block"
                position="relative"/></header></div>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Product
                item={item}
                onSelect={(value) => {
                  value ? addToSelected(item) : removeFromSelected(item);
                }}
              ></Product>
            </div>
          );
        })}
      </div>
      <section>
        <h1>YOUR SELECTED ITEMS: </h1>
        {selectedProducts.map((item) => {
          return <Product item={item}></Product>;
        })}
      </section>
    </div>
  );
}
