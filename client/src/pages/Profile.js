import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Nav";
import NavLoginedIn from "../components/NavLoginedIn";

class Profile extends Component {

    state = {
        menu: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        githubURL: "",
        profileURL: "",
        id: ""

    }
    componentDidMount() {
        this.getAllSessionForMenu();
        this.getUserData();

    }
    getAllSessionForMenu = () => {
        API.getAllSessionForMenu()
            .then((res) => {
                console.log(res)
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
                console.log(res)
                this.setState({
                    fname: res.data.fname,
                    lname: res.data.lname,
                    email: res.data.email,
                    profileURL: res.data.profileURL,
                    githubURL: res.data.githubURL
                })
                console.log(this.state)
            })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault()
        console.log(this.state)
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

    render() {
        return (
            <div>
                {this.state.menu ? <NavLoginedIn /> : <Nav />}
                <Container fluid>
                    <Row>
                        <Col size="md-12 sm-12">
                            <Col size="md-12">
                                <h1 className="text-center">Profile</h1>
                                <h3 style={{ color: 'red' }}></h3>
                            </Col>
                        </Col>
                    </Row>

                    <form>
                        <Row>
                            <Col size="md-1"></Col>
                            <Col size="md-3">
                                <label>Profile Picture:</label>
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
                            </Col>
                            <Col size="md-2"></Col>
                        </Row>
                    </form>
                    <Row>
                        <Col size="md-12" className="justify-content-center">
                            <FormBtn
                                onClick={this.handleFormSubmit}
                            >
                                Update
                            </FormBtn>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>
        );
    }
}

export default Profile;