//importing necessary modules from React and React Bootstrap
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
//declaring functional component Footer
export default function Footer() {
  //using the useState hook to create a state variable show and ints corresponding updater function
  //setShow. This state is used to control the visibility of the offcanvas 
  const [show, setShow] = useState(false);
//handle functions: declaring tw functions handleShow and handleClose to respectively close and show the Offcanvas
//by updating the show state
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//return statement: returns the JSX content of the component. the component renders a  help Button. when clicked 
//it triggers the handleShow function to show the offcanvas. 
  return (
    <div style={{ padding: "3%",  }}>
      <>
        <Button
          variant="danger"
          onClick={handleShow}
          style={{ marginRight: "90%" }}
        >
          help
        </Button>
{/* utilizing the offcanvas component from React Bootstrap. The offcanvas includes the header with teh close button
and title, an a body with shipping information. */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shipping information</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h3>ROYAL MAIL</h3>
            <p>
              Enjoy reliable and cost-effective shipping with Royal Mail.
              Standard delivery times apply, and tracking information will be
              provided. Perfect for those who prioritize budget-friendly options
              without compromising on service.
            </p>
            <h3>PARCEL COURIER</h3>
            <p>
              Opt for Parcel Courier for swift and secure deliveries. Benefit
              from expedited shipping, real-time tracking, and enhanced security
              measures. Ideal for customers seeking a balance between speed and
              reliability.
            </p>
            <h3>DHL</h3>
            <p>
              Experience the epitome of international shipping with DHL. Enjoy
              lightning-fast delivery times, door-to-door tracking, and a global
              network ensuring your package reaches its destination with utmost
              speed and precision. Choose DHL for premium, express shipping
              services.
            </p>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}
