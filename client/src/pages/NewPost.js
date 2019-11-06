import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark, ColLight } from "../components/Grid";
import { Input, FormBtn,SelectBox,TextArea } from "../components/Form";
import axios from "axios";

class NewPost extends Component {
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
              <h1 className="text-center">Share a New Post</h1>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <ColLight size="md-4">
            <form>
              <label>Post Title:</label>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="title (required)"
              />
                <label>Post Category:</label>
                <SelectBox>
                  <option value="">...</option>
                  <option value="Sports">Sports</option>
                  <option value="Politic">Politic</option>
                  <option value="Entertainment">Entertainment</option>
                </SelectBox>
               <label>Post Content:</label>
              <TextArea
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="content (required)"
              >
              </TextArea>
                <label>Featured Image:</label>
                <div className="form-group">
                    <input type="file" name="featuredImage" />
              </div>
              <hr />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Post
              </FormBtn>
              <a onClick={() => this.resetFields()} href="#" className="registrationLink">Reset</a>
            </form>
          </ColLight>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default NewPost;
