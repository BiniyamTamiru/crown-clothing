import React from "react";
import "./collectionPreview.css";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items.filter((item,idx) => idx < 4).map(({id,...otherItemprops}) => (
        <CollectionItem key={id}{...otherItemprops} />
         
      ))}
    </div>
  </div>
);

export default CollectionPreview;