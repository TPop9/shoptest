import React from "react";
import { useHistory } from "react-router-dom";

const SingleProduct = (props) => {
  const history = useHistory();
  const item = history.location.state.item;

  return (
    <div className="content">
      <h1>{item.title}</h1>
      <p> <span style={{color: "red"}}>Price: </span>{item.price}</p>
      <p><span style={{color: "red"}}>Description:</span> {item.description}</p>
      <p><span style={{color: "red"}}>Category:</span> {item.category}</p>
      <p><span style={{color: "red"}}>Rating:</span> {item.rating.rate}</p> <br /><br />
      <img
        src={item.image}
        alt= "product"
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
