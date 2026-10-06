import React from "react";
import CollectionOverview from "../../Component/collections-overview/collection-overview";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.util";

import { updateCollections } from "../../redux/shop/shop.action";
import WithSpinner from "../../Component/with-spinner/with-spinner";


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);


class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);

      this.setState({ loading: false });
    });
   
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <CollectionOverviewWithSpinner isLoading={loading} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap =>
    dispatch(updateCollections(collectionMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);