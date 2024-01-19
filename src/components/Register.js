//importing all necessary modules from React, React Bootstrap, formik, react Router
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogIn from "./LogIn";
import styles from "../components/styles.css";
import Alert from "react-bootstrap/Alert";

//validation function that takes values as input and returns an object containing validation errors
const validate = (values) => {
  const errors = {};
  //validation logic for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    //validation logic for first name
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
//validation logic for last name
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
//validation logic for username
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 10) {
    errors.userName = "Must be 10 characters or less";
  }
// validation logic for password
  if (!values.password) {
    //A password (Must contain 8 characters or more, at least one
    errors.password = "Required"; // uppercase and lowercase letter, a number and a special case character
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (
    //on my first submission of this code you said : Your password validation regex is quite strict.
    // It's important to balance security with user convenience. This complexity may be the root cause 
    //of the issues i was facing. So I'm changing it to less stricter one and commenting out previous one

    // !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(values.password)
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)
  ) {
    errors.password =
      "Must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
//validation logic for confirming password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match";
  }

  return errors;
};
//declaration of a functional component named Registration
export default function Register() {
  //state for managing alert visibility
  const [showAlert, setShowAlert] = useState(false);
  //state for managing modal visibility
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //initialize useNavigate hook to handle navigation within the application
  const nav = useNavigate();
  // initialize useFormik hook with initial form values, validation function, and on onSumbit callback
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    //an onsubmit callback function displaying an alert and navigating upon successful form submission
    onSubmit: (values) => {
      nav('/login');
      handleClose();
      setShowAlert(true);
    },
  });
  // the component returns a form element with specified class name to use it in css
  //the onsubmit event is handled by formik.handleSubmit
  //each input is associated with its label and Formik handlers are used for state management and validation
  //displaying an error message is the field has been touched (blurred) and there is a validation error
  //submit button  is triggering the form submission
  return (
    <div className="signUpButton">
      <Button variant="link" onClick={handleShow} className="registerButton">
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {console.log("onsubmit", formik.handleSubmit)}
            <Form.Group className="mb-3" controlId="formGroupFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="regInput"
                placeholder="Enter name"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="regInput"
                placeholder="Enter surname"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className="regInput"
                placeholder="Enter username"
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div style={{ color: "red" }}>{formik.errors.userName}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="regInput"
                placeholder="Enter email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="regInput"
                placeholder="Enter password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="regInput"
                placeholder="Enter password"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="submit_button">
              SIGN UP
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        You,ve signed up successfully. To continue please sign in.
      </Alert>
    </div>
  );
}
