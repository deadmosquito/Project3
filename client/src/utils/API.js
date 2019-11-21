import axios from "axios"; 
export default {
  getAllBlogs: function(){
    return axios.get("/api/all")
  },
  getAllBlogs3: function(){
    return axios.get("/api/all3")
  },
  getBlog: function(id){
    return axios.get("/api/blogs/"+ id)
  },
  savePost: function(postData) {
    return axios.post("/api/new-post", postData);
  },
  getCategories: function(){
    return axios.get("/api/new-post")
  },
  getNews: function(data){
    return axios.post("/api/news",data)
  },
  getNewsFive:function(){
    return axios.get("/api/newsfive")
  },
  authorRegister: function(authtData){
    return axios.post("/api/registration",authtData)
  },
  authorLogin: function(authtData){
    return axios.post("/api/login",authtData)
  },
  loginSession: function(){
    return axios.get("/api/login")
  },
  getAllSession: function(){
    return axios.get("/api/new-post")
  },
  getAllSessionForMenu:function(){
    return axios.get("/api/home")
  },
  logOut:function(){
    return axios.get("/api/logout")
  },
  getUserData:function(){
    return axios.get("/api/profile")
  },
  updateUserData:function(data){
    return axios.put("/api/profile", data)
  },
  loginGithub:function(){
    return axios.get("/api/github")
  },
  like: function(blogId){
    return axios.post("/api/like",blogId)
  },
  getUserBlogs:function(){
    return axios.get("/api/user-blog")
  }
 /*  ,
  newsCategoryT:function(data){
    return axios.get("api/")
  } */
};
