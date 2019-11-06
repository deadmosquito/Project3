import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

import axios from "axios";

class Registration extends Component {
  state = {
    fname: "",
    lname: "",
    email:"",
    password:"",
    rPassword:""
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    resetFields = ()=>{
    
      this.state.fname= ""
      this.state.lname=""
      this.state.email=""
      this.state.password=""
      this.state.rPassword=""
    }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Col size="md-12">
              <h1 className="text-center">Registration</h1>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <ColDark size="md-4">
            <form>
              <label>First Name:</label>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                placeholder="John (required)"
              />
              <label>Last Name:</label>
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="Wick (required)"
              />
              <label>Email Address:</label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                type="email"
                placeholder="john@site.com (required)"
              />
              <label>Password:</label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="***** (required)"
              />
               <label>Repeat Password:</label>
              <Input
                value={this.state.rPassword}
                onChange={this.handleInputChange}
                name="rPassword"
                type="password"
                placeholder="***** (required)"
              />
                <hr />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Register
              </FormBtn>
            
            <a onClick={() => this.resetFields()} href="#" className="registrationLink">Reset</a>

            </form>
          </ColDark>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default Registration;
