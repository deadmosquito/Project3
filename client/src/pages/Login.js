import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

import axios from "axios";

class Login extends Component {
  state = {
    username: [],
    password: ""
    };
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Col size="md-12">
              <h1 className="text-center">Login</h1>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <ColDark size="md-4">
            <form>
              <label>Username:</label>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <label>Password:</label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="***** (required)"
              />

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
