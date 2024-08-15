// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ name, book }) => {
  console.log(name, book);
  return (
    <div className='card'>
      <p>Hola {name}!</p>
      <p>Sabemos que uno de tus libros favoritos es:</p>
      <p className='response'>{book}</p>
    </div>
  );
};

export default Card;
