//importing all necessary modules from React, React Bootstrap, Redux and images of products
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import image1 from "../images/kids/image1.jpeg";
import image2 from "../images/kids/image2.jpeg";
import image3 from "../images/kids/image3.jpeg";
import image4 from "../images/kids/image4.jpeg";
import image5 from "../images/kids/image5.jpeg";
import image6 from "../images/kids/image6.jpeg";
import image7 from "../images/kids/image7.jpeg";
import image8 from "../images/kids/image8.jpeg";
import image9 from "../images/kids/image9.jpeg";
import image10 from "../images/kids/image10.jpeg";
import image11 from "../images/kids/image11.jpeg";
import image12 from "../images/kids/image12.jpeg";
import image13 from "../images/kids/image13.jpeg";
import image14 from "../images/kids/image14.jpeg";
import image15 from "../images/kids/image15.jpeg";
//functional component KidsProducts
export default function KidsProducts() {
  //variable kidsProducts which is an array of objects. each object has properties of id, src, title and price
  const kidsProducts = [
    { id: 1, src: image1, title: "Cotton dungarees", price: 22.99 },
    {
      id: 2,
      src: image2,
      title: "Disney sweatshirt dress",
      price: 9.99,
    },
    {
      id: 3,
      src: image3,
      title: "Babydoll collar dress",
      price: 19.99,
    },
    {
      id: 4,
      src: image4,
      title: "Flared skirt dress",
      price: 12.99,
    },
    {
      id: 5,
      src: image5,
      title: "Striped cotton dress",
      price: 15.99,
    },
    {
      id: 6,
      src: image6,
      title: "Cotton linen dress",
      price: 19.99,
    },
    { id: 7, src: image7, title: "Velvet pinafore", price: 9.99 },
    {
      id: 8,
      src: image8,
      title: "Striped cotton dress",
      price: 15.99,
    },
    { id: 9, src: image9, title: "Cotton dungarees", price: 19.99 },
    {
      id: 10,
      src: image10,
      title: "Long knit dungarees",
      price: 19.99,
    },
    {
      id: 11,
      src: image11,
      title: "Printed cotton romper",
      price: 22.99,
    },
    {
      id: 12,
      src: image12,
      title: "Cotton knit jumpsuit",
      price: 9.99,
    },
    {
      id: 13,
      src: image13,
      title: "Floral print jumpsuit",
      price: 25.99,
    },
    {
      id: 14,
      src: image14,
      title: "Printed cotton dress",
      price: 22.99,
    },
    {
      id: 15,
      src: image15,
      title: "Long knit dungarees",
      price: 19.99,
    },
  ];
  //using the useDispatch hook to get the dispatch function from Redux store
  const dispatch = useDispatch();
  //defining a function handleAddToCart that dispatches the addToCart action with the selected products
  const handleAddToCart = (product) => {
    console.log("items in women's component", product);

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
      {/* using map ti iterate over each  product in the kidsProducts array
      for each product creating a Card component with an image, title, price, and Add to cart button */}
      {kidsProducts.map((products, index) => (
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
