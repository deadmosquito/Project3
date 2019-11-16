import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import NavLoginedIn from "../components/NavLoginedIn";
import { Col, Row, Container } from "../components/Grid";
import "./style.css"

class Blogs extends Component {
  state = {
    menu:false
  };
  constructor(props) {
    super(props);
    this.state = {
      allNews: []
    }
  }

  componentDidMount() {
    this.apiNewsCall();
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
 apiNewsCall = () => {
  API.getNews()
    .then((res) => {
      toast.info('Loading News...')
      console.log(res.data)
      this.setState({allNews:res.data})
    }).catch(err => console.log(err));
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
          <Col size="md-12 sm-12">
            <Col size="md-12">
              {/* <img src={this.state.newsArray.articles.urlToImage} /> */}
              {/* <p>{this.state.newsArray.articles.title}</p> */}
              {this.state.allNews.length ? (
                 <div>

                    {this.state.allNews.map(singleNews => (
                      <div className={"rowMarginSpace"}>
                      <Row>
                        <Col size={"md-3"}>
                          <img className="img-thumbnail" src={singleNews.urlToImage} />
                        </Col>
                        <Col size={"md-9"}>
                           <p><strong>Title: </strong>{singleNews.title}</p>
                           <p><small>Author: {singleNews.author}</small></p>
                           <p><strong>Description: </strong>{singleNews.description}</p>
                           <a target="_blank" href={singleNews.url} className="NewsReadMore">Read More...</a>
                        </Col>
                      </Row>
                      </div>
                      
                    ))}
                  </div>

                ) : (
                    <h3></h3>
                  )} 
            </Col>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Blogs;
