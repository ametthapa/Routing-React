import React, { useState, useEffect } from "react";


// inital render

// whenever we call hooks component re-render

const Shop = () => {
  // skip
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);

  // skip
  useEffect(() => {
    fetchItems();
  }, []);

  // skip
  const fetchItems = async () => {
    setFetching(true);
    const data = await fetch("https://fakestoreapi.com/products?limit=10");
    const apiItems = await data.json();

    setItems(apiItems);

    setFetching(false);
  };

  // not skip
  if (fetching === true) {
    return <div>Loading...</div>;
  }

  // not skip
  console.log(items)

  

  // not skip
  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => {
        return (
          <div>
            <img
              alt={item.title}
              style={{ height: 200, width: 200 }}
              src={item.image}
            />
            <h4>{item.title}</h4>
            <h3 style={{ fontWeight: "bold", color: "tomato" }}>
              Rs. {item.price}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
