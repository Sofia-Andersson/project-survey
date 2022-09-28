import React from 'react'

export const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>Your favorite food is {food}</p>
      <p>Your favorite drink is {drink}</p>
    </>
  );
};