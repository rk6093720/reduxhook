// import React from 'react'

// import { useState, useRef } from 'react'
// import PropTypes from "prop-types"
// import CreditCardItem from './CreditCardItem';
// const CreditCard = ({length, setCardNumberHandler}) => {
//     const inputRef = useRef([]);
//     const [inputBoxLen] = useState(new Array(length).fill(1));
//     const [inputBoxValue, setInputBoxValue] = useState(
//       new Array(length).fill("") //["","","",""]
//     );
  
//     const handleChange = (e, index) => {
//       inputBoxValue[index] = e.target.value;
//       setInputBoxValue(inputBoxValue);
//       console.log(e.target.value.length)
//       if (e.target.value.length > 0 && index < length - 1) {
//         inputRef.current[index + 4].focus();
//       }
//       // console.log(inputBoxValue);
//       setCardNumberHandler(inputBoxValue.join(""));
//     };
  
//     const handleBackspace = (e, index) => {
//       if (index > 0) {
//         inputRef.current[index - 1].focus();
//       }
//       inputBoxValue[index] = e.target.value;
//       setInputBoxValue(inputBoxValue);
//       setCardNumberHandler(inputBoxValue.join(""));
//     };
  
//     const handlePaste = (e) => {
       
//       e.preventDefault();
//       const data = e.clipboardData
//         .getData("text")
//         .split("")
//         .filter((item, index) => index < length);
//       data.forEach((value, index) => {
//         inputBoxValue[index] = value;
//         inputRef.current[index].value = value;
//         if (index < length - 1) {
//           inputRef.current[index + 1].focus();
//         }
//       });
//     };
//     return (
//       <div
//         onPaste={handlePaste}
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         {inputBoxLen.map((_, index) => {
//           return (
//             <CreditCardItem
//               key={index}
//               changeHandler={(e) => handleChange(e, index)}
//               //ref={inputRef}   //get only the reference of last index
//               onBackSpaceHandler={(e) => handleBackspace(e, index)}
//               ref={(element) => {
//                 inputRef.current[index] = element;
//               }}
//             />
//           );
//         })}
//       </div>
//     );
//   };
  
  // useRef=> to access the dom node element 
  /*
  1.DOM element in present in .focus()
  2. store some mutable data, across the component life-cycle i.e across re-renders.
  
  const inputRef = useRef(10) is do create object of {current:10 }
  returned object all persist for the full lifetime of the component
  */
  // PropTypes=> it is way to limit the types of props that you get in a react components
  
  
  
//   CreditCard.propTypes = {
//    length:PropTypes.number,
//    onChange: PropTypes.func
  
//   }
// export default CreditCard


import React from 'react'

const CreditCard = () => {
  const [name]
  return (
    <div>
      <form>
              



      </form>
      
    </div>
  )
}

export default CreditCard
