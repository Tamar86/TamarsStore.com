//importing necessary modules from React and React Bootstrap
//importing images for the landing page
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../images/homeImages/woman.jpeg";
import Image2 from "../images/homeImages/man.jpeg";
import Image3 from "../images/homeImages/kids.jpeg";
import Image4 from "../images/homeImages/image1.webp";
import Image5 from "../images/homeImages/image2.jpg";
import Image6 from "../images/homeImages/image3.webp";
// declaring functional component Landing
//using the Bootstrap Container, Row, Col and Image components to display thumbnail images in grid
//using Carousel component to create a slideshow
export default function Landing() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={Image1} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={Image2} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={Image3} thumbnail />
          </Col>
        </Row>
      </Container>

      <Carousel style={{ padding: "20px" }}>
        <Carousel.Item>
          <Image src={Image4} height={500} width={1300} />
          <Carousel.Caption>
            <h3>SHOP WITH CONFIDENCE</h3>
            <p>Best Offers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Image5} height={500} width={1300} />
          <Carousel.Caption>
            <h3>SHOP WITH CONFIDENCE</h3>
            <p>Best Offers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Image6} height={500} width={1300} />
          <Carousel.Caption>
            <h3>SHOP WITH CONFIDENCE</h3>
            <p>Best Offers.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
