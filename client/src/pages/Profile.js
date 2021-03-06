import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Nav";
import NavLoginedIn from "../components/NavLoginedIn";
import Moment from 'react-moment';

class Profile extends Component {

  state = {
    menu: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    githubURL: "",
    profileURL: "",
    id: "",
    blogById: []
  }
  componentDidMount() {
    this.getAllSessionForMenu();
    this.getUserData();
    this.checkSession();
    this.getUserBlogs();
  }
  getAllSessionForMenu = () => {
    API.getAllSessionForMenu()
      .then((res) => {
        if (!(res.data.isAuthorLoggin)) {

          this.setState({
            menu: false
          })
        } else {
          this.setState({
            menu: true,
            id: res.data.authorId
          })
        }
      })
      .catch(err => console.log(err))
  }

  getUserData = () => {
    API.getUserData()
      .then((res) => {
        this.setState({
          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          profileURL: res.data.profileURL,
          githubURL: res.data.githubURL
        })
      })
  }

  getUserBlogs = () => {
    API.getUserBlogs()
      .then((res) => {
        this.setState({ blogById: res.data })
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault()
    API.updateUserData({
      id: this.state.id,
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      githubURL: this.state.githubURL,
      profileURL: this.state.profileURL,
    })
      .then((result) => console.log(result))
      .catch(err => console.log(err));
  }

  checkSession = () => {
    API.getAllSession()
      .then((res) => {
        if (!(res.data.isAuthorLoggin)) {
          this.props.history.push('/login', { some: 'state' })
        } else {

          this.setState({
            AuthorId: res.data.authorId
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.menu ? <NavLoginedIn /> : <Nav />}
        <Container fluid>
          <Row>
            <Col size="md-12 sm-12">
              <Col size="md-12">
                <h1 className="text-center profile-header">Profile</h1>
              </Col>
            </Col>
          </Row>

          <form className="profile-form">
            <Row>
              <Col size="md-2"></Col>
              <Col size="md-2">
                <label>Profile Picture:</label>
                <img className="img-thumbnail" src={this.state.profileURL} alt="profile-image" />
              </Col>
              <Col size="md-3">
                <label>First Name:</label>
                <Input
                  value={this.state.fname}
                  onChange={this.handleInputChange}
                  name="fname"
                  placeholder="John"
                />
                <label>Email:</label>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="johnwick@site.com (required)"
                />
              </Col>
              <Col size="md-3">
                <label>Last Name:</label>
                <Input
                  value={this.state.lname}
                  onChange={this.handleInputChange}
                  name="lname"
                  type="lname"
                  placeholder="Wick (required)"
                />
                <label>GitHub URL:</label>
                <Input
                  value={this.state.githubURL}
                  onChange={this.handleInputChange}
                  name="githubURL"
                  type="githubURL"
                  placeholder="github.com/johnwick"
                />
                <Row>
                  <Col size="md-12">
                    <div className="justify-content-end">
                      <FormBtn
                        onClick={this.handleFormSubmit}
                      >
                        Update
                    </FormBtn>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col size="md-2"></Col>
            </Row>
          </form>
          <hr />
          <Row>
            <Col size="md-12">
              <h3 style={{ paddingTop: '15px' }} className="text-center">Your Posts</h3>
            </Col>
          </Row>
          <div className="solo-blog">
            {this.state.blogById.length ? (
              <Row>
                {this.state.blogById.map(singleBlog => (

                  <Col size="md-4 sm-4" key={singleBlog.id}>
                    <div style={{backgroundImage:`url(${singleBlog.image})`}} className="imageBlogsRes col-md-12"></div>
                    <Col size="md-12">
                      <h4>{singleBlog.title}</h4>
                    </Col>
                    <Col size="md-12">
                      <p><strong>Date:</strong><small>  <Moment format="MM/DD/YYYY HH:mm" date={singleBlog.createdAt} /></small></p>
                    </Col>
                    <p className="fixedHeight">{singleBlog.description}</p>
                    <Link className="text-center NewsReadMore" to={"/blogs/" + singleBlog.id}>Read More!</Link>
                  </Col>
                ))}
              </Row>

            ) : (<h3>No Posts :(</h3>)}
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;