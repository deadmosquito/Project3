import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Nav from "../components/Nav";
import NavLoginedIn from "../components/NavLoginedIn";
import Jumbotron from "../components/Jumbotron";
class NoMatch extends Component {
  state={
    menu:''
  }
  componentDidMount() {
    this.getAllSessionForMenu();
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
            menu: true
          })
        }
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="noSpacing">
        {this.state.menu ? <NavLoginedIn /> : <Nav />}
        <br />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>404 Page Not Found</h1>
                <h1>
                  <span role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
              </span>
                </h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NoMatch;
