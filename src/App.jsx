import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import CardItem from "./components/Card";

import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);

  const addProduct = (id, quantity) => {
    // Get the product from the groceries array
    const product = groceries.find((product) => product.id === id);

    // Create a new basket array to avoid mutating the state directly
    const newBasket = [...basket];

    // Find the index of the product in the basket
    const index = newBasket.findIndex((item) => item.id === product.id);

    // If the product is already in the basket, update the quantity
    if (index >= 0) {
      newBasket[index].quantity += quantity;

      // If the quantity is 0 or less, remove the product from the basket
      if (newBasket[index].quantity <= 0) {
        newBasket.splice(index, 1);
      }

      // Update the new basket with the new array
    } else if (quantity > 0) {
      newBasket.push({
        ...product,
        quantity: quantity,
      });
    }

    // Update the basket state with the new basket array
    setBasket(newBasket);
  };

  const groceries = [
    {
      id: 1,
      image: "src/assets/pexels-828860-2586073.jpg",
      title: "Versus Skin Care",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 24.0,
    },
    {
      id: 2,
      image: "src/assets/pexels-suzyhazelwood-2536965 (2).jpg",
      title: "Nail Polish",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 30.99,
    },
    {
      id: 3,
      image: "src/assets/pexels-roman-odintsov-7691164.jpg",
      title: "Markup Remover",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 12.99,
    },
    {
      id: 4,
      image: "src/assets/pexels-polina-tankilevitch-3735619.jpg",
      title: "Pimple Solution",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 12.99,
    },

    {
      id: 5,
      image: "src/assets/pexels-pixabay-301367.jpg",
      title: "Lip Gloss",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 18.0,
    },
    {
      id: 6,
      image: "src/assets/pexels-suzyhazelwood-1340925.jpg",
      title: "Polina Polish",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 12.0,
    },

    {
      id: 7,
      image: "src/assets/pexels-suzyhazelwood-1340925.jpg",
      title: "Polina Scrub",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 15.99,
    },
    {
      id: 8,
      image: "src/assets/pexels-suzyhazelwood-2536965 (2).jpg",
      title: "Skin Tune",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 15.99,
    },

    {
      id: 9,
      image: "src/assets/pexels-suzyhazelwood-2533266.jpg",
      title: "Versus Lip Stick",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 14.0,
    },
    {
      id: 10,
      image: "src/assets/pexels-suzyhazelwood-2533311.jpg",
      title: "Amazon Polish",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit nulla debitis deleniti nisi aut",
      price: 25.99,
    },
  ];

  return (
    <div className="main-container">
      <Header />
      <h1>Welcome To My Costmetic Shop</h1>
      Total number of items: {groceries.length}
      <br />
      <div className="container">
        <div className="card-container">
          {groceries.map((product) => (
            <CardItem
              key={product.id}
              product={product}
              onAddProduct={addProduct}
            />
          ))}
        </div>
        {/* <Basket basket={basket}/> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
