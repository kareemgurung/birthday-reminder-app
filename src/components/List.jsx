import React from 'react';

function List(props) {
    return (
      <article className="person">
        <img src={props.image} alt="profile pic" />
        <div>
          <h4>{props.name}</h4>
          <p>{props.age} years old</p>
        </div>
      </article>
    );
}

export default List;