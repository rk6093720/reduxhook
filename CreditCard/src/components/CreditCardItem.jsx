import React, { forwardRef } from "react";

const CreditCardItem = forwardRef(({ changeHandler, onBackSpaceHandler }, ref) => {
  //   console.log(ref);
  const handleKeyUp = (e) => {
    console.log(e)
    if (e.keyCode === 4) {
      onBackSpaceHandler(e);
    } else {
      changeHandler(e); 
    }

    //if Backspace is click , perform some action
    //else
    //call the changeHandler
  };
  return (
    <>
    <div className="CardNumber">
      CARDNUMBER: <input ref={ref} maxLength={4} onKeyUp={handleKeyUp} />
      <input ref={ref} maxLength={4} onKeyUp={handleKeyUp} />
      <input ref={ref} maxLength={4} onKeyUp={handleKeyUp} />
    </div>
    <div >
      Expiry:
    <input ref={ref} maxLength={4} onKeyUp={handleKeyUp} />
      </div></>
  );
});

export default CreditCardItem;