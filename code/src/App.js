import React, { useState } from 'react';

import { PartyOptions } from 'components/PartyOptions';
import { Gadgets } from 'components/Gadgets';
import { Result } from 'components/Result';
import { Guests } from 'components/Guests'
import { Name } from 'components/Name';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [partyOptions, setPartyOptions] = useState('');
  const [gadgets, setGadgets] = useState('');
  const [guests, setGuests] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <PartyOptions
          partyoptions={partyOptions}
          setPartyOptions={setPartyOptions} />
      )}
      {step === 3 && (
        <Gadgets gadgets={gadgets} setGadgets={setGadgets} />
      )}
      {step === 4 && (
        <Guests guests={guests} setGuests={setGuests} />
      )}
      {step === 5 && (
        <Result
          name={name}
          partyOptions={partyOptions}
          gadgets={gadgets}
          guests={guests} />
      )}
      {step < 5 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}