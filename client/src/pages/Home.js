import React, { Component } from "react";
import SaveBtn from "../components/Savebutton";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Footer from "../components/Footer"
import axios from "axios";
import "./style.css"

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    googleAllBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  saveBook = (data) => {
    console.log(data)
    API.saveBook(data)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.title)
      .then(res => {
        this.setState({ googleAllBooks: res.data.items, title: "" })
      }
      )
      .catch((err) => {
        console.log(err)
      });

  };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-12">
          <h3 style={{paddingTop:'15px'}} className="text-center">Latest Blogs</h3>
          </Col>
          </Row>
          <Row>
          <Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col>
          <Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col><Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col><Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col><Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col><Col size="md-4 sm-4">
             <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
             <Row>
              <Col size="md-5">
               <h4><strong>Title</strong></h4>
              </Col>
              <Col size="md-7">
                <p>Date:<small> 09/23/2019</small> By <small>Ashkan</small></p>
              </Col>
             </Row>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className="text-center" href="#">Read More!</a>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className="text-center moreBlogsButton">
             <a href="#">Click Here to See More Blogs</a>
            </p>
          </Col>
        </Row>
        <hr className="divider" />
        <Row>
        <Col size="md-12">
          <h3 style={{paddingTop:'15px'}} className="text-center">Latest News</h3>
          </Col>
          </Row>
          <Row>
            <Col size="md-2">
            <img className="img-fluid img-thumbnail" src ="/img/blog-sample.jpg" alt ="" />
            </Col>
            <Col size="md-10">
              <h5>News Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="text-center" href="#">Read More!</a>

            </Col>
          </Row>
      </Container>
    );
  }
}

export default Books;
