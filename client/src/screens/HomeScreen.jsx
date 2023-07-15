import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const shopData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681243945981-5e38556ecbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Product 1",
      add: "Address 1",
      price: 10.99,
    },
    {
      image:
        "https://images.unsplash.com/photo-1689039994903-0a1d4c8607f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Product 2",
      add: "Address 2",
      price: 19.99,
    },
    {
      image:
        "https://images.unsplash.com/photo-1689039994903-0a1d4c8607f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Product 2",
      add: "Address 2",
      price: 19.99,
    },
    {
      image:
        "https://images.unsplash.com/photo-1689039994903-0a1d4c8607f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Product 2",
      add: "Address 2",
      price: 19.99,
    },
    // Add more objects as needed
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAllShops")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-blue-600 text-4xl">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, ind) => (
          <div className="flex" key={ind}>
            <div className="m-5 bg-yellow-300 rounded-3xl">
              <img
                className="rounded-tl-3xl rounded-tr-3xl"
                src={item.image}
                alt=""
              />
              <div className="px-5 py-3">
                <h1>{item.name}</h1>
                <h1>{item.address}</h1>
                <h1>{item.price}</h1>
                <h1>{item.mobile}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
