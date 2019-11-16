import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import News from "./pages/News";
import NewPost from "./pages/NewPost";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      {/* <Nav /> */}
      <ToastContainer />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/news" component={News} />
      <Route exact path="/new-post" component={NewPost} />
      <Route exact path="/profile" component={Profile} />
      <Footer />
    </div>

    </Router>
  );
}

export default App;
