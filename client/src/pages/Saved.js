import React, { Component } from "react";
import DeleteBtn from "../components/Deletebutton";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";

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
        this.setState({ googleAllBooks: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  DeleteSavedBook = (data) => {
    console.log(data)
    API.deleteBook(data)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Col size="md-12">
              <h1 className="text-center">Saved Books</h1>
            </Col>
            {this.state.googleAllBooks.length ? (
              <List>

                {this.state.googleAllBooks.map(googleBook => (
                  <ListItem data-id={googleBook.id} key={googleBook.id}>
                   
                      <h3>
                        {googleBook.title} by {googleBook.publisher}
                      </h3>
                 
                    <p>{googleBook.description}</p>
                    <a target="_blank" href={googleBook.previewlink}>
                      View
                    </a>
                    <DeleteBtn onClick={() => { this.DeleteSavedBook(googleBook._id)
                    }
                    }

                    />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
