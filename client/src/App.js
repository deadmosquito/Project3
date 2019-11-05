import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      
      <Nav />
      
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
{/*   <Route exact path="/books/:id" component={Detail} />*/}    
      
      <Footer />
    </div>

    </Router>
  );
}

export default App;
