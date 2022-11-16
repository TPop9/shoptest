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
      <div className="videoWrapper"
        
        
      >
        <header>
          <Iframe className="video"
            url="https://www.youtube.com/embed/iSbDLAscjz8"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
          />
        </header>
      </div>
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
      <section style={{ width: "100%" }}>
        <h1>YOUR SELECTED ITEMS: </h1>
        {selectedProducts.map((item) => {
          return <Product item={item}></Product>;
        })}
      </section>
    </div>
  );
}
