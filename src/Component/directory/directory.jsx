import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss";
import {connect}from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selector";
 import { createStructuredSelector } from "reselect";


  const Directory =({section})=>
  ( 
      <div className="directory-menu">
        {section.map(({ title, imageUrl, id,size,linkUrl}) => (
          <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
              linkUrl={linkUrl}
            />
        ))}
      </div>
    );
    const mapStateToProps= createStructuredSelector({
       section:selectDirectorySections
    })
 
 

export default connect(mapStateToProps) (Directory);