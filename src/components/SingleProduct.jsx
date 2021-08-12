import React, { useState, useEffect } from "react";


// inital render

// whenever we call hooks component re-render

const SingleProduct = ( match ) => {
  // skip
  const [item, setItem] = useState([]);
  const [fetching, setFetching] = useState(false);

  // skip
  useEffect(() => {
    fetchItem();
  }, );

  // skip
  const fetchItem = async () => {
      setFetching(true);
      const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);

      const singleProduct = await data.json();

      setItem(singleProduct);
      setFetching(false);
  };

  // not skip
  if (fetching === true) {
    return <div>Loading...</div>;
  }

  // not skip
  console.log(item)


  

  // not skip
  return (
    <div>
      <h1 className="text-3xl font-bold">Product Detaiils</h1>
      {/* {item.map((item) => {
          return (
            <div> {item.name} </div>
          )
      }) } */}
    </div>
  );
};

export default SingleProduct;
