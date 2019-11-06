import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container, ColDark } from "../components/Grid";

import axios from "axios";

function News() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>News</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default News;
  