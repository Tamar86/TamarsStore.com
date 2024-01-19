import React, { useState } from "react";
//importing actions from cartSlice
import {
  deleteFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../store/cartSlice";
//importing useDispatch and useSelector
import { useDispatch, useSelector } from "react-redux";
//importing Bootstrap form, card and button
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
//creating functional component Cart
export default function Cart() {
  const dispatch = useDispatch();
  //creating variables for value, totalPrice and items that are obtained using the useSelector hook from cartSlice
  const value = useSelector((state) => state.cart.value);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.items);
  //initializing a state variable shipmentMethod using useState hook. It stores selected shipment method
  const [shipmentMethod, setShipmentMethod] = useState("");
  //this array holds information about shipment methods
  const shipmentMethods = [
    "Delivery to UK Mainland in 2-3 business days. Shipping fee £2.88 ",
    "Delivery to UK Mainland in 3-5 business days. Shipping fee £1.50",
    "International delivery in 5-7 business days. Shipping fee £15.00",
  ];
  //this function is called when the user selects a shipment method from the dropdown.
  //it extracts the selected value from the event and checks if its "0"(default option).
  //if yes, it sets shipment method to an empty string. if a specific shipment method is
  //selected, it retrieves the corresponding method from the shipmentMethods array.

  const handleShipmentChange = (event) => {
    //extracts selected value from the event
    const selectedValue = event.target.value;
    //sets shipment method based on the selected value
    setShipmentMethod(
      //check if the selected value is (default option - 0)

      selectedValue === "0"
        ? //if yes, sets shipment method to an empty string
          ""
        : //if no, retrieves corresponding shipment method from the array based on the selected index
          //since arrays are zero-indexed, subtracting 1 adjusts the index to match the array
          //index. so if value = "1", selected value -1 becomes 0, accessing the first element in the array
          shipmentMethods[selectedValue - 1]
    );
  };
  // this function is responsible for removing an item from cart when remove button is clicked
  //it takes item as an parameter representing item to be removed from the cart
  //it the dispatches deleteFromCart action , passing the item as the payload
  //deleteFromCart action is part of the Redux actions defined in the cartSlice.
  //it updates the state in the Redux store to remove the specific item from the card
  const handleRemoveFromCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const handleIncrease = (item) => {
    //the current quantity of the item in the cart
    let newQuantity = item.quantity;

    //price of the product associated with the item
    let itemPrice = item.product.price;

    //if current quantity iss greater than 0
    if (newQuantity) {
      //if yes newItemPrice is calculated
      const newItemPrice = newQuantity++;
      console.log("newItemPrice", newItemPrice);
      //sending action to the Redux store
      dispatch(
        increaseItemQuantity({
          //necessary payloads
          itemId: item.product.id,
          newQuantity,
          itemPrice,
          newItemPrice,
        })
      );
    }
  };
  // similar to handleIncrease function
  const handleDecrease = (item) => {
    let newQuantity = item.quantity;
    let itemPrice = item.product.price;
    console.log("item product price", itemPrice);
    //if current quantity is greater than 0
    if (newQuantity) {
      newQuantity--;
      dispatch(
        decreaseItemQuantity({
          itemId: item.product.id,
          newQuantity,
          itemPrice,
        })
      );
    }
  };
// returning number of total items, total price and quantity as well as remove button that are mapped.
//also checkout button which doesn't work and shipment method. im using bootstrap form, card and buttons.
  return (
    <div className="cart_container">
      <div
        className="cart_item"
        style={{
          padding: "10%",
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: "larger",
          backgroundColor: "",
        }}
      >
        <h3
          style={{
            paddingTop: "10px",
            fontFamily: "serif",
            backgroundColor: "",
            border: "3px solid skyBlue",
            borderRadius: "5px",
          }}
        >
          TOTAL ITEMS: {value}{" "}
        </h3>

        <p style={{ marginTop: "50px", backgroundColor: "" }}>
          Total price: $ {totalPrice.toFixed(2)}{" "}
        </p>

        {items.map((item, index) => (
          <div key={index} style={{ backgroundColor: "" }}>
            <img
              src={item.product.src}
              alt={item.product.title}
              style={{ width: "50px", height: "50px" }}
            />
            <p>
              {item.product.title} - $
              {(item.product.price * item.quantity).toFixed(2)}
              <br />
              Quantity {item.quantity}
              <button
                onClick={() => handleDecrease(item)}
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                -
              </button>
              <button
                onClick={() => handleIncrease(item)}
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                +
              </button>
            </p>

            <Button
              onClick={() => handleRemoveFromCart(item)}
              style={{ backgroundColor: "black", border: "none" }}
            >
              Remove item
            </Button>
          </div>
        ))}
      </div>
      <div className="cart_item" style={{ padding: "5%", marginTop: "5%" }}>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "80%", backgroundColor: " rgb(254, 166, 2)" }}
          onChange={handleShipmentChange}
        >
          <option value="0">Select Shipment Method</option>

          <option value="1">Royal Mail</option>
          <option value="2">Parcel Courier</option>
          <option value="3">DHL</option>
        </Form.Select>
        <Card className="text-center" style={{ width: "80%" }}>
          <Card.Body style={{ backgroundColor: "black" }}>
            <Card.Text style={{ color: "whitesmoke" }}>
              {shipmentMethod}
            </Card.Text>
          </Card.Body>
          <Card.Footer
            className="text-muted"
            style={{ backgroundColor: "black", paddingBottom: "6%" }}
          >
            <Button variant="warning">
              Proceed to checkout (Items:{value})
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
