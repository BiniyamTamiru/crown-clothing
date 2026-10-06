import React from "react";

import HomePage from "./pages/HomePageComponent/HomePage";
import ShopPage from "./pages/shopePage/shopePage";
import CollectionPage from "./pages/collection/collection";
import Header from "./Component/header/header";
import SignUpAndSignIn from "./pages/singUpAndSignIn/signUpAndSignIn";
import CheckoutPage from "./pages/checkout/checkout";

import { createStructuredSelector } from "reselect";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  auth,
  createUserProfileDocument,
  
} from "./firebase/firebase.util";

import {
  selectCurrentUser
} from "./redux/user/user.selector";

import {
  selectCollectionsForPreview
} from "./redux/shop/shop.selector";

import { connect } from "react-redux";

import {
  setCurrentUser
} from "./redux/user/user.action";


class App extends React.Component {

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;


  componentDidMount() {

    const {
      setCurrentUser,
      collectionsArray
    } = this.props;


    // ======================================
    // ADD COLLECTIONS TO FIRESTORE
    // ======================================

    if (
      collectionsArray &&
      collectionsArray.length > 0
    ) {

      addCollectionAndDocument(
        "collections",
        collectionsArray.map(
          ({ title, items }) => ({
            title,
            items
          })
        )
      );

    } else {

      console.log(
        "❌ collectionsArray is empty!"
      );

    }


    // ======================================
    // AUTH
    // ======================================

    this.unsubscribeFromAuth =
      auth.onAuthStateChanged(
        async (user) => {

          if (user) {

            console.log(
              "✅ User logged in:",
              user.email
            );

            const userRef =
              await createUserProfileDocument(
                user
              );

            this.unsubscribeFromSnapshot =
              userRef.onSnapshot(
                (snapshot) => {

                  setCurrentUser({
                    id: snapshot.id,
                    ...snapshot.data()
                  });

                }
              );

          } else {

            console.log(
              "No user logged in"
            );

            setCurrentUser(null);

          }

        }
      );
  }


  componentWillUnmount() {

    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }

    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }

  }


  render() {

    const {
      currentUser
    } = this.props;


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
            path="/shop/:categoryId"
            element={<CollectionPage />}
          />

          <Route
            path="/sign"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignUpAndSignIn />
              )
            }
          />

          <Route
            path="/checkout"
            element={
              currentUser ? (
                <CheckoutPage />
              ) : (
                <Navigate to="/sign" />
              )
            }
          />

        </Routes>

      </div>
    );
  }
}


const mapStateToProps =
  createStructuredSelector({

    currentUser:
      selectCurrentUser,

    collectionsArray:
      selectCollectionsForPreview

  });


const mapDispatchToProps =
  (dispatch) => ({

    setCurrentUser:
      (user) =>
        dispatch(setCurrentUser(user))

  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);