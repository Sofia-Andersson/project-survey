import React from 'react'

const gadgetGroup = ['balloons', 'confetti', 'girlands', 'costumes', 'wigs', 'table setting'];

export const Gadgets = ({ gadgets, setGadgets }) => {
  const handleGadgetChange = (event) => {
    setGadgets(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="gadgets-radiobuttons">
        <p>What is your favorite party gadget? </p>
        <div className="radioParent">
          {gadgetGroup.map((group) => (
            <label key={group} htmlFor="group">
              <input
                type="radio"
                className="radioCircle"
                value={group}
                onChange={handleGadgetChange}
                checked={gadgets === group}
                aria-label={group}
                id="props-input" />
              {group}
            </label>
          ))}
        </div>
      </label>
    </form>
  );
};