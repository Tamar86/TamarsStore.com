//importing all necessary modules from React, React Bootstrap, Redux and images of products
import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import image1 from "../images/men/image1.jpeg";
import image2 from "../images/men/image2.jpeg";
import image3 from "../images/men/image3.jpeg";
import image4 from "../images/men/image4.jpeg";
import image5 from "../images/men/image5.jpeg";
import image6 from "../images/men/image6.jpeg";
import image7 from "../images/men/image7.jpeg";
import image8 from "../images/men/image8.jpeg";
import image9 from "../images/men/image9.jpeg";
import image10 from "../images/men/image10.jpeg";
import image11 from "../images/men/image11.jpeg";
import image12 from "../images/men/image12.jpeg";
import image13 from "../images/men/image13.jpeg";
import image14 from "../images/men/image14.jpeg";
import image15 from "../images/men/image15.jpeg";
//functional component MensProducts
export default function MenProducts() {
  //variable mensProducts which is an array of objects. each object has properties of id, src, title and price
  const mensProducts = [
    {
      id: 15,
      src: image1,
      title: "Wool coat with detachable collar",
      price: 159.99,
    },
    {
      id: 1,
      src: image2,
      title: "Nappa leather-effect jacket",
      price: 89.99,
    },
    {
      id: 2,
      src: image3,
      title: "Double-sided leather-effect jacket",
      price: 109.99,
    },
    {
      id: 3,
      src: image4,
      title: "SOFELATE® padded parka with hood",
      price: 139.99,
    },
    {
      id: 4,
      src: image5,
      title: "Wool funnel neck coat",
      price: 159.99,
    },
    {
      id: 5,
      src: image6,
      title: "Wool coat with detachable collar",
      price: 159.99,
    },
    {
      id: 6,
      src: image7,
      title: "Lightweight recycled wool coat",
      price: 119.99,
    },
    {
      id: 7,
      src: image8,
      title: " Funnel neck coat",
      price: 139.99,
    },
    {
      id: 8,
      src: image9,
      title: "SOFELATE® padded parka with hood",
      price: 139.99,
    },
    {
      id: 9,
      src: image10,
      title: "Handmade recycled wool coat",
      price: 199.99,
    },
    {
      id: 10,
      src: image11,
      title: "Wool funnel neck coat",
      price: 159.99,
    },
    {
      id: 11,
      src: image12,
      title: "Wool coat with detachable collar",
      price: 159.99,
    },
    {
      id: 12,
      src: image13,
      title: "Wool funnel neck coat",
      price: 159.99,
    },
    {
      id: 13,
      src: image14,
      title: "Lightweight recycled wool coat",
      price: 119.99,
    },
    {
      id: 14,
      src: image15,
      title: "Nappa leather-effect jacket",
      price: 89.99,
    },
  ];
  //using the useDispatch hook to get the dispatch function from Redux store
  const dispatch = useDispatch();
  //defining a function handleAddToCart that dispatches the addToCart action with the selected products
  const handleAddToCart = (product) => {
    console.log("items in women's component", product);
    const myProducts = {
      title: product.title,
      price: product.price,
    };
    dispatch(addToCart(product));
  };
  //returns JSX representing the components structure
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        marginLeft: "3%",
        padding: "1%",
      }}
    >
      {/* using map to iterate over each  product in the mensProducts array
      for each product creating a Card component with an image, title, price, and Add to cart button */}
      {mensProducts.map((products, index) => (
        <Card
          key={index}
          style={{ width: "18rem", padding: "10px", border: "none" }}
        >
          <Card.Img
            variant="top"
            src={products.src}
            alt={products.title}
            className="womenProductsImage"
          />
          <Card.Body className="card_body">
            <Card.Title className="card_title" style={{ fontSize: "medium" }}>
              {products.title}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="card_text">
              {" "}
              ${products.price}
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Button
                variant="warning"
                onClick={() => handleAddToCart(products)}
                style={{ marginTop: "5px" }}
              >
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}
