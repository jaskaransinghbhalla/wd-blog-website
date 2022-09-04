import TopBar from "./components/topbar/TopBar"
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/homepage/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Posts from "./components/posts/Posts.jsx";
import Single from "./pages/single/Single.jsx";


function App(){

  const user = true;

  return (
  <Router>

    <TopBar/>

      <Routes>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/register">
          {user ? <Home/>:<Register/>}
        </Route>

        <Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>

        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>

        <Route path="/posts">
          <Posts/>
        </Route>

        <Route path="/write">
        {user ? <Write/> : <Register/>}
        </Route>

        <Route path="/post:postId">
          <Single/>
        </Route>

      </Routes>

  </Router>
  );
}

export default App;