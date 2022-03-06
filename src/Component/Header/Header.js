import React, { useEffect, useRef } from "react";
import "./Header.css";

function Header({ expression, result, history }) {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [expression]);
  return (
    <div className="header custom-scroll">
      <div className="header_history">
        {history &&
          history?.map((item, index) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
      </div>
      <br></br>
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {result}
      </p>
    </div>
  );
}

export default Header;
