import axios from "axios";

export default {
  savePost: function(postData) {
    return axios.post("/api/new-post", postData);
  },
  getCategories: function(){
    return axios.get("/api/new-post")
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
  }
};
