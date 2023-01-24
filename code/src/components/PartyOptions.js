import React from 'react'

export const PartyOptions = ({ partyOptions, setPartyOptions }) => {
  const handlePartyOptionsChange = (event) => {
    setPartyOptions(event.target.value);
  }
  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="party-options-select">
        <p>What kind of party are you planning?</p>
        <select value={partyOptions} onChange={handlePartyOptionsChange} id="party-options-select">
          <option value="">Select your kind of party:</option>
          <option value="Kids birthday party">Kids birthday party</option>
          <option value="Adult birthday party">Adult birthday party</option>
          <option value="Babyshower">Babyshower</option>
          <option value="Halloween party">Halloween party</option>
          <option value="Graduation party">Graduation party</option>
        </select>
      </label>
    </form>
  );
};