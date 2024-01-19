//importing all necessary modules from React, React Bootstrap, Redux and images of products
import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ListGroup from "react-bootstrap/ListGroup";
import image1 from "../images/women/image1.webp";
import image2 from "../images/women/image2.webp";
import image3 from "../images/women/image3.webp";
import image4 from "../images/women/image4.webp";
import image5 from "../images/women/image5.webp";
import image6 from "../images/women/image6.webp";
import image7 from "../images/women/image7.webp";
import image8 from "../images/women/image8.webp";
import image9 from "../images/women/image9.webp";
import image10 from "../images/women/image10.webp";
import image11 from "../images/women/image11.webp";
import image12 from "../images/women/image12.webp";
import image13 from "../images/women/image13.webp";
import image14 from "../images/women/image14.webp";
import image15 from "../images/women/image15.jpg";
import Button from "react-bootstrap/esm/Button";
//functional component WomenProducts
export default function WomenProducts() {
  //declaring variable womansProducts which is an array of objects. each object has properties of id, src, title and price
  const womansProducts = [
    {
      id: 1,
      src: image1,
      title: "Block heel leather ankle boots",
      color: [],
      price: 59.99,
    },
    {
      id: 2,
      src: image2,
      title: "Suede heeled ankle boots",
      color: [],
      price: 101.99,
    },
    {
      id: 3,
      src: image3,
      title: "Oversize handmade wool coat",
      color: [],
      price: 89.99,
    },
    {
      id: 4,
      src: image4,
      title: "Fitted wool coat",
      color: [],
      price: 150.99,
    },
    {
      id: 5,
      src: image5,
      title: " Belt coat",
      color: [],
      price: 77.99,
    },
    {
      id: 6,
      src: image6,
      title: "Wool coat",
      color: [],
      price: 76.99,
    },
    {
      id: 7,
      src: image7,
      title: "Double-sided faux leather jacket",
      color: [],
      price: 52.99,
    },
    {
      id: 8,
      src: image8,
      title: "Wool belt coat",
      color: [],
      price: 60.99,
    },
    {
      id: 9,
      src: image9,
      title: "Wool coat with lapels",
      color: [],
      price: 89.99,
    },
    {
      id: 10,
      src: image10,
      title: "Double-breasted wool coat",
      color: [],
      price: 69.99,
    },
    {
      id: 11,
      src: image11,
      title: "Oversize wool coat",
      color: [],
      price: 59.99,
    },
    {
      id: 12,
      src: image12,
      title: "Woolen coat",
      color: [],
      price: 39.99,
    },
    {
      id: 13,
      src: image13,
      title: "Jacquard shoulder bag",
      color: [],
      price: 89.99,
    },
    {
      id: 14,
      src: image14,
      title: "Slingback toe shoe",
      color: [],
      price: 120.99,
    },
    {
      id: 15,
      src: image15,
      title: "Turtleneck knit sweater",
      color: [],
      price: 59.99,
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
       {/* using map to iterate over each  product in the womansProducts array
 for each product creating a Card component with an image, title, price, and Add to cart button */}
      {womansProducts.map((products, index) => (
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
            <Card.Text className="card_text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item
              className="card_text"
              style={{ height: "30px", fontWeight: "bold" }}
            >
              {" "}
              ${products.price}
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Button
                variant="warning"
                onClick={() => handleAddToCart(products)}
                style={{ margin: "0%" }}
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
