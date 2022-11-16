import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";

import axios from "axios";

const SingleProduct = (props) => {
  const history = useHistory();

  const itemFromHistory = history.location.state?.item;

  const [item, setItem] = useState(itemFromHistory);

  const { id } = useParams();

  useEffect(() => {
    if (!item) {
      axios

        .get("https://fakestoreapi.com/products")

        .then((res) => {
          const itemFromApi = res.data.find(
            (apiItem) => apiItem.id === parseInt(id)
          );

          setItem(itemFromApi);
        });
    }
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <h1>{item.title}</h1>
      <p>
        {" "}
        <span style={{ color: "red" }}>Price: </span>
        {item.price}
      </p>
      <p>
        <span style={{ color: "red" }}>Description:</span> {item.description}
      </p>
      <p>
        <span style={{ color: "red" }}>Category:</span> {item.category}
      </p>
      <p>
        <span style={{ color: "red" }}>Rating:</span> {item.rating.rate}
      </p>{" "}
      <br />
      <br />
      <img
        src={item.image}
        alt="product"
        style={{
          width: "200px",

          height: "200px",

          display: "block",

          marginBottom: "100px",
        }}
      ></img>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        {" "}
        Return Back{" "}
      </button>
    </div>
  );
};

export default SingleProduct;
