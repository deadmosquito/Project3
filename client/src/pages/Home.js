import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import NavLoginedIn from "../components/NavLoginedIn";
import { Col, Row, Container } from "../components/Grid";
import "./style.css"

class Blogs extends Component {
  state = {
    menu:false
  };


  componentDidMount() {
    this.getAllSessionForMenu();
  }

  getAllSessionForMenu = ()=>{
   API.getAllSessionForMenu()
   .then((res) =>{
    console.log(res)
     if(!(res.data.isAuthorLoggin)){
     
       this.setState({
        menu:false
       })
     }else{
      this.setState({
        menu:true
       })
     }
   })
   .catch(err => console.log(err))
 }


  render() {
    return (
      <div className={"noSpacing"}>
        {this.state.menu ? <NavLoginedIn /> : <Nav />}
        <Container>
          <Row>
            <Col size="md-12">
              <h3 style={{ paddingTop: '15px' }} className="text-center">Latest Blogs</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-4 sm-4">
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
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
              <h3 style={{ paddingTop: '15px' }} className="text-center">Latest News</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <img className="img-fluid img-thumbnail" src="/img/blog-sample.jpg" alt="" />
            </Col>
            <Col size="md-10">
              <h5>News Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="text-center" href="/News">Read More!</a>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blogs;
