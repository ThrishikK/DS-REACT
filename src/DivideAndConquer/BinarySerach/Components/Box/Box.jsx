import "./Box.css";

import React, { forwardRef } from "react";
import "./Box.css";

const Box = forwardRef(({ details, inRange }, ref) => {
  const decoratorClass = inRange ? "in-range" : "not-in-range";

  return (
    <div ref={ref} className={`box ${decoratorClass}`}>
      <div className="box-details">
        <p className="key">Id</p>
        <p className="colon">:</p>
        <p className="value">{details.id}</p>
      </div>
      <div className="box-details">
        <p className="key">Name</p>
        <p className="colon">:</p>
        <p className="value">{details.name}</p>
      </div>
    </div>
  );
});

export default Box;

// function Box({ details, inRange }) {
//   // console.log(inRange);
//   const decoratorClass = inRange ? "in-range" : "not-in-range";

//   return (
//     <div className={`box ${decoratorClass}`}>
//       <div className="box-details">
//         <p className="key">Id</p>
//         <p className="colon">:</p>
//         <p className="value">{details.id}</p>
//       </div>
//       <div className="box-details">
//         <p className="key">Name</p>
//         <p className="colon">:</p>
//         <p className="value">{details.name}</p>
//       </div>
//     </div>
//   );
// }

// export default Box;
