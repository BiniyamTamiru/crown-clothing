import React from "react";
import HomePage from "./pages/HomePageComponent/HomePage";
import ShopPage from "./pages/shopePage/shopePage";
import Header from "./Component/header/header";
import SignUpAndSignIn from "./pages/singUpAndSignIn/signUpAndSignIn";

import { Routes, Route, Navigate } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {

        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

        });

      } else {

        setCurrentUser(null);

      }

    });

  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();

  }

  render() {

    return (
      <div>

        <Header />

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/shop"
            element={<ShopPage />}
          />

          <Route
            path="/sign"
            element={
              this.props.currentUser
                ? <Navigate to="/" />
                : <SignUpAndSignIn />
            }
          />

        </Routes>

      </div>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);