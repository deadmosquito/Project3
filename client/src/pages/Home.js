import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import {toast} from "react-toastify"
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import NavLoginedIn from "../components/NavLoginedIn";
import { Col, Row, Container } from "../components/Grid";
import Moment from 'react-moment';
import "./style.css"

class Blogs extends Component {
  state = {
    menu:false
  };
  constructor(props) {
    super(props);
    this.state = {
      allNews: [],
      allBlogs: []
    }
  }

  componentDidMount() {
    this.apiNewsCall();
    this.getAllSessionForMenu();
    this.getAllBlogs();
    
  }
  getAllBlogs = () => {
    API.getAllBlogs3()
      .then((res) => {
        toast.info("Blogs are loading... !");
        console.log(res.data)
        this.setState({ allBlogs: res.data })
        console.log(this.state.allBlogs)
      }).catch(err => console.log(err))
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
        {this.state.allBlogs.length ? (
            <Row>
              {this.state.allBlogs.map(singleBlog => (

                <Col size="md-4 sm-4">
                  <img className="img-fluid img-thumbnail imageBlogsRes" src={singleBlog.image} alt="" />
                  <Col size="md-12">
                    <h6><strong>Title: </strong>{singleBlog.title}</h6>
                  </Col>
                  <Col size="md-12">
                    <p><strong>Date:</strong><small>  <Moment format="MM/DD/YYYY HH:mm" date= {singleBlog.createdAt} /></small><strong> By </strong><small>{singleBlog.Author.fname}</small></p>
                  </Col>
                  <p className="fixedHeight">{singleBlog.description}</p>
                  <Link className="text-center NewsReadMore" to={"/blogs/" + singleBlog.id}>Read More!</Link>
                </Col>
              ))}
            </Row>

          ) : (<h3></h3>)}
        <Row> 
          <Col size="md-12">
            <p className="text-center moreBlogsButton">
              <a href="/blogs">Click Here to See More Blogs</a>
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
                          <img className="img-thumbnail " src={singleNews.urlToImage} />
                        </Col>
                        <Col size={"md-9"}>
                           <p><strong>Title: </strong>{singleNews.title}</p>
                           <p><small>Author: {singleNews.author}</small></p>
                           <p><strong>Description: </strong>{singleNews.description}</p>
                           <br />
                           <a target="_blank" href={singleNews.url} className="NewsReadMore">Read More...</a>
                        </Col>
                      </Row>
                      <hr />
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
