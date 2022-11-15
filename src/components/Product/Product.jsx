import React, { useState } from "react";
import style from "./Product.module.css";
import { useHistory } from "react-router-dom";

const Product = ({ item, onSelect }) => {
  const { title, id } = item;
  const history = useHistory();

  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const handleClick = (e) => {
    history.push({
      pathname: "/singleproduct/" + id,
      state: { item: item },
    });
  };

  return (
    <div key={item.id} className={style.box} style={{ backgroundColor: color }}>
      {title}
      {onSelect && (
        <input
          type="checkbox"
          value={checked}
          onClick={() => {
            checked ? setColor("white") : setColor("yellow");
            onSelect(!checked);
            setChecked(!checked);
          }}
        ></input>
      )}
      <button className={style.btn} onClick={handleClick}>
        Read More
      </button>
    </div>
  );
};

export default Product;