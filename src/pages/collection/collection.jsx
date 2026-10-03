import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../Component/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.scss";

const CollectionPage = () => {
  const { categoryId } = useParams();

  const collection = useSelector((state) =>
    selectCollection(categoryId)(state)
  );

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;