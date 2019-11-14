import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container, ColDark, ColLight } from "../components/Grid";
import { Input, FormBtn, SelectBox, TextArea } from "../components/Form";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { save } from 'save-file'

class NewPost extends Component {
  state = {
    title: "",
    description: "",
    AuthorId:0
  };
  componentDidMount() {
    this.loadCategories();
    this.checkSession();
  }

  checkSession = ()=>{
   API.getAllSession()
   .then((res) =>{
   
     if(!(res.data.isAuthorLoggin)){
      toast.info("Please Try To Login... !");
      this.props.history.push('/login', { some: 'state' })
     }else{

       this.setState({
         AuthorId: res.data.authorId
       })
     }
   } )
   .catch(err => console.log(err))
 }
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      content: "",
      image: "",
      categories: []
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }
  loadCategories = () => {
    API.getCategories()
      .then((res) => {
        
        console.log(res)
        this.setState({ categories: res.data.dataCategory })
      }).catch(err => console.log(err));
  }
  handleImageChange = e => {
    
    this.setState({ image: e.target.files[0].name });
    console.log(e.target.files[0])
    const data = new FormData() 
    data.append('file', this.state.image)
    axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
   /*  switch (e.target.name) {
      // Updated this
     
      case 'featuredImage':
        if (e.target.files.length > 0) {
          // Accessed .name from file 
          this.setState({ image: e.target.files[0].name });
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    } */
    
  }

  handleSelectChange = event => {
    this.setState({
      category: event.target.value,
    });
  };
  handleTextChange = event => {
    this.setState({
      content: event.target.value,
    });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    API.savePost({
      title: this.state.title,
      description: this.state.description,
      body: this.state.content,
      image: this.state.image,
      AuthorId: this.state.AuthorId,
      CategoryId: this.state.category
    })
      .then((result) => console.log(result))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Col size="md-12">
              <h1 className="text-center">Share a New Post</h1>{this.state.AuthorId}
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
              <label>Post Description:</label>{this.state.description}
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (required)"
              />
              <label>Post Category:</label>
              <div className="form-group">
                {this.state.categories.length ? (
                  <select className="postCategory"  name="category" value={this.state.category} onChange={this.handleSelectChange}>

                    {this.state.categories.map(singleCategory => (
                      <option key={singleCategory.id} value={singleCategory.id}>
                        {singleCategory.name}
                      </option>
                    ))}
                  </select>

                ) : (
                    <h3>No Results to Display</h3>
                  )} 
                </div>

              <label>Post Content:</label>
              <div className="form-group">
                <textarea
                className="form-control"
                  onChange={this.handleTextChange}
                  name="content"
                  placeholder="content (required)"
                >
                </textarea>
              </div>
              <label>Featured Image:</label>
              <div className="form-group">
                <input
                  onChange={this.handleImageChange}
                  type="file"
                  name="featuredImage" />
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
