import React, { useState, useEffect } from 'react';
import {link} from "react"
import { Modal, ModalBody, ModalBodyProps, ModalHeader, Button, modal, ModalFooter } from 'reactstrap';
import { Input, Col, Label, Form, Row, FormGroup } from 'reactstrap'
import axios from 'axios';
import Project1Bg from './Project1Bg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Project1(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(false);
  const [Regiaterationmodal, setRegistrationModal] = useState(false);
  // const loginHandler = () => {
  //   alert("ok its working")

  // }
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: '', 
    email: '',
    isAdmin: false
  });
  const [adminData, setAdminData] = useState([])

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    confirmpassword: "",
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  })
  const handleInput = (e) => {
    console.log('handleInput triggered')
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  console.log(formdata)

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = (e) => {
    // e.preventDefault();
    setModal(!modal);
    //setRegistrationModal(!Regiaterationmodal)
  }


  const regToggle = (e) => {
    // e.preventDefault();
    // setModal(!modal);
    setRegistrationModal(!Regiaterationmodal)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`http://localhost:5002/login/${formdata.email}/${formdata.password}`)
      console.log(res)
      setModal(!modal);
      setLoggedIn(true);
      // const userData = JSON.parse(res.data);
      // setUser({
      //   name: userData.name,
      //   email: userData.email,
      //   isAdmin: userData.isAdmin,
      // })
    }
    catch (err) {
      throw err
    }
  }
  const handleSubmitreg = async (e) => {
    e.preventDefault()
    try {
      if (formdata.password === formdata.confirmpassword) {
        let res = await axios.post('http://localhost:5002/register', formdata)
        console.log(res)
        if (res.status === 200) {
          setRegistrationModal(!Regiaterationmodal)
          alert("registered succesfully")
        }
      } else {
        alert("Passwords are not matching, please re-check")
      }
    }
    catch (err) {
      throw err
    }
  }

  useEffect(() => {
    if (user.isAdmin === true) {
      // API call to get Admin data
      setAdminData()
    }
    if (Regiaterationmodal === true) {
      setFormdata({
        email: '',
        password: '',
        confirmpassword: "",
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      })
    }
  }, [user, Regiaterationmodal])

  return (
    <div>
      <Navbar color="faded" light className='fixed-top' >
        <NavbarBrand href="/" className="me-auto">
          <img src='https://tse4.mm.bing.net/th?id=OIP.mT8ARtWDXJaY_oMq0cd_cQHaHa&pid=Api&P=0&h=220' style={{ height: "10vh", width: "10vh" }}>
          </img>
        </NavbarBrand>
        <div className={loggedIn ? 'sign-up hidden' : 'sign-up'} >
          <div>
            <Button color="danger" onClick={toggle}>
              Sign in?
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...props}>
              <ModalHeader toggle={toggle}>Sign Page</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit}>
                  <Row className="row-cols-lg-auto g-3 align-items-center">
                    <Col>
                      <Label
                        className="visually-hidden"
                        for="exampleEmail"
                      >
                        Email
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="your email"
                        type="email"
                        value={formdata.email}
                        onChange={handleInput}
                        required
                      />
                    </Col>
                    <Col>
                      <Label
                        className="visually-hidden"
                        for="examplePassword"
                      >
                        Password
                      </Label>
                      <Input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        id="examplePassword"
                        name="password"
                        placeholder="don't tell!"
                        type="password"
                        value={formdata.password}
                        onChange={handleInput}
                        required
                      />
                    </Col>
                    <Col>
                      <FormGroup check>
                        <Input
                          id="exampleCheckbox"
                          name="checkbox"
                          type="checkbox"
                        />
                        <Label
                          check
                          for="exampleCheckbox"
                        >
                          Remember Me
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <Button type='submit'>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
          </div>
          <div>
            <Button color="danger" onClick={regToggle}>
              Sign up
            </Button>
            <Modal isOpen={Regiaterationmodal} toggle={regToggle} fullscreen>
              <ModalHeader toggle={regToggle}>Start your new Regiateration here</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmitreg}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">
                          Email
                        </Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="with a placeholder"
                          type="email"
                          value={formdata.email}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">
                          Password
                        </Label>
                        <Input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="password"
                          value={formdata.password}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="confirm-password">
                          Confirm Password
                        </Label>
                        <Input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          id="confirm-password"
                          name="confirmpassword"
                          placeholder="confirm password placeholder"
                          type="password"
                          value={formdata.confirmpassword}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">
                      Address
                    </Label>
                    <Input
                      id="exampleAddress"
                      name="address"
                      placeholder="1234 Main St"
                      value={formdata.address}
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress2">
                      Address 2
                    </Label>
                    <Input
                      id="exampleAddress2"
                      name="address2"
                      placeholder="Apartment, studio, or floor"
                      value={formdata.address2}
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">
                          City
                        </Label>
                        <Input
                          id="exampleCity"
                          name="city"
                          value={formdata.city}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleState">
                          State
                        </Label>
                        <Input
                          id="exampleState"
                          name="state"
                          value={formdata.state}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">
                          Zip
                        </Label>
                        <Input
                          id="exampleZip"
                          name="zip"
                          value={formdata.zip}
                          onChange={handleInput}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input
                      id="exampleCheck"
                      name="check"
                      type="checkbox"
                    />
                    <Label
                      check
                      for="exampleCheck"
                    >
                      Check me out
                    </Label>
                  </FormGroup>
                  <Button type='submit'>
                    Register
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
        <div className={loggedIn ? 'user' : 'user hidden'}>
          Logged in
          <Button onClick={() => setLoggedIn(false)}>
                    Logout
                  </Button>
        </div>

      </Navbar>
    </div>

  );
}

export default Project1;