import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    const data = await fetch("https://fakestoreapi.com/products?limit=12");
    const apiItems = await data.json();

    setItems(apiItems);

    setFetching(false);
  };

  // not skip
  if (fetching === true) {
    return <div>Loading...</div>;
  }

  // not skip
  console.log(items);

  // not skip
  return (
    <div>
      <h1 className="text-3xl font-bold">Shop Page</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 px-24">
        {items.map((item) => {
          return (
            <Link to={`/shop/${item.id}`}>
              <div className="p-4 w-3/4" key={item.id}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
