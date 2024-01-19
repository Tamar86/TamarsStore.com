//importing necessary modules and components
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../store/userSlice";
//validation function for form fields
const validate = (values) => {
  //error handling logic for username address
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 10) {
    errors.userName = "Must be 10 characters or less";
  }
  //error handling logic for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (
    // !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(values.password)

    //on my first submission of this code you said : Your password validation regex is quite strict.
    // It's important to balance security with user convenience. This complexity may be the root cause
    //of the issues i was facing. So I'm changing it to less stricter one and commenting out previous one.
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)
  ) {
    errors.password =
      "Must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  return errors;
};
//functional component for handling login/logout
export default function LogIn() {
  //state for handling modal visibility
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  //React router hook for navigation
  const nav = useNavigate();
  //formik hook for form management
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    // onSubmit callback dispatches action,  navigates to landing page same as home and closes modal
    onSubmit: (values) => {
      dispatch(setUserName(values.userName));
      nav("/");
      handleClose();
    },
  });
  //rendering login/logout button and modal
  return (
    <div className="loginButton" style={{ marginLeft: "5%" }}>
      {!userName ? (
        <Button
          variant="link"
          onClick={handleShow}
          style={{ color: "darkGreen", fontWeight: "bolder" }}
        >
          Sign in
        </Button>
      ) : (
        <Button
          variant="link"
          onClick={() => {
            dispatch(setUserName(null));
          }}
          style={{ color: "darkGreen", fontWeight: "bolder" }}
        >
          Sign out
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in </Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Floating className="mb-3">
              <Form.Control
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                placeholder="Enter username"
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div style={{ color: "red" }}>{formik.errors.userName}</div>
              ) : null}
              <label htmlFor="floatingInputCustom">Username</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="logIn_Button"
              style={{ width: "500px" }}
            >
              Submit
            </Button>
          </Modal.Footer>
          <Modal.Body>
            Don't have an account? <Register />{" "}
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
}
