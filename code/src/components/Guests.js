import React from 'react'

export const Guests = ({ guests, setGuests }) => {
  const handleGuestChange = (event) => {
    setGuests(event.target.value);
  }
  return (
    <>
      <p>How many guests are you planning for?</p>
      <input
        type="number"
        value={guests}
        onChange={handleGuestChange} />
    </>
  );
};
