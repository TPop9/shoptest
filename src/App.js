import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import SingleProduct from "./components/SingleProduct/SingleProduct";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Webshop</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/auth">Auth </Link>
        </nav>
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />

          <Route path="/about">
            <About />
          </Route>
          <Route path="/singleproduct/:id">
            <SingleProduct />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/auth">
            <Register />
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
