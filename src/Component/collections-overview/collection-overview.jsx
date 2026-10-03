import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../Component/collectionPreview/collectionPreview";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {Object.keys(collections).map((collection) => {
      const { id, ...otherCollectionProps } = collections[collection];

      return (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        />
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);