// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ name, book }) => {
  console.log(name, book);
  return (
    <div>
      <p>Hola {name}</p>
      <p>Sabemos que uno de tus libros favoritos es:</p>
      <p>{book}</p>
    </div>
  );
};

export default Card;
