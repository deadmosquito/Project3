import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Redirect  } from "react-router-dom";

import axios from "axios";
import { strictEqual } from "assert";

class Login extends Component {
  componentDidMount() {
    this.loginSession();
  }

  state = {
    email: "",
    password: "",
    alertText:""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    API.authorLogin({
      email: this.state.email,
      password: this.state.password
    })
      .then((result) => console.log(result))
      .catch(err => console.log(err));
  }

  loginSession = () => {
    API.loginSession()
      .then((res) => {
        console.log(res)
        if (res.data.isSuccess === "Yes") {
          this.props.history.push('/new-post', { some: 'state' })
        }
        if (res.data.isSuccess === "No") {
          this.setState({
            alertText: "Please Try To Login"
          })
        }
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Col size="md-12">
              <h1 className="text-center">Login</h1>
              <h3 style={{color: 'red'}}></h3>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <ColDark size="md-4">
            <form>
              <label>Email:</label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="johnwick@site.com (required)"
              />
              <label>Password:</label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="***** (required)"
              />
              <hr />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
              <a href="/registration" className="registrationLink">Registration</a>
            </form>
          </ColDark>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
