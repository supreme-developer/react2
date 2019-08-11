import React from 'react';


function FavoriteList(props) {
    const favorite = props.favorite;
    const listItems = favorite.map((fruit) =>
      <li>
        <a href={"#" + fruit}>{fruit}</a>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  

export default FavoriteList;