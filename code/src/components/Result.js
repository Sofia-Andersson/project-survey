import React from 'react'
import JSConfetti from 'js-confetti'

export const jsConfetti = new JSConfetti()

// const [confetti, setConfetti] = useState('');

export const Result = ({ name, partyOptions, gadgets, guests }) => {
  return (
    <>
      <p>Hello {name}!</p>
      <p>You are planning a {partyOptions}</p>
      <p>Your favorite gadget is {gadgets}</p>
      <p>You are planning for {guests} guests</p>
      <p>Find all you need HERE or EMAIL us to support you</p>
    </>
  );
};

(jsConfetti.addConfetti({ confettiNumber: 400 }))

