import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { fetchHomePage } from "./store/homePage/actions";
import {
  selectHomePageLoading,
  selectHomepages,
} from "./store/homePage/selectors";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import StoriesPage from "./pages/Stories/StoriesPage";
import MyPage from "./pages/MyPage/MyPage";

const Home = () => {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages);
  const pagesLoading = useSelector(selectHomePageLoading);

  console.log("homepages in app.js", homepages);

  useEffect(() => {
    dispatch(fetchHomePage());
    console.log("does this even run?");
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>

      {!pagesLoading ? (
        homepages.map((page) => {
          return (
            <div
              style={{
                backgroundColor: page.backgroundColor,
                color: page.color,
                margin: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: 300,
                height: 300,
              }}
            >
              <p>{page.title}</p>
              <p>{page.description}</p>
              <Link to={`/homepages/${page.id}`}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: 80, marginBottom: 30 }}
                >
                  TO STORIES
                </Button>
              </Link>
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/homepages/mypage" component={MyPage} />
        <Route path="/homepages/:id" component={StoriesPage} />
        <Route exact path="/" component={Home} exact={true} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
