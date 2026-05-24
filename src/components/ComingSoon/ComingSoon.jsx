import React from "react";
import "./comingSoon.css";

const letters = [
  { char: "C", gradient: "linear-gradient(90deg, #F7EA60, #3CF2DE, #F774BB)"  },
  { char: "O", gradient: "linear-gradient(90deg, #FCEF04, #DC419B)" },
  { char: "M", gradient: "linear-gradient(90deg, #FF0F7B, #F89B29)" },
  { char: "I", gradient: "linear-gradient(90deg, #84FFC9, #AAB2FF, #ECA0FF)" },
  { char: "N", gradient: "linear-gradient(90deg, #F4E784, #F24389, #A478F1)" },
  { char: "G", gradient: "linear-gradient(90deg, #FCEF04, #DC419B)" },
  { char: "S", gradient: "linear-gradient(90deg, #F0EAFC, #61CEF2, #F538B9)" },
  { char: "O", gradient: "linear-gradient(90deg, #F756AA, #F75672)" },
  { char: "O", gradient: "linear-gradient(90deg, #FCEF04, #DC419B)" },
  { char: "N", gradient: "linear-gradient(90deg, #F7EA60, #3CF2DE, #F774BB)" },
];

const ComingSoon = () => {
  return (
    <div className="wrapper">
      <div className="inner" style={{ "--quantity": letters.length }}>
        {letters.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              "--index": index,
              "--gradient": item.gradient,
            }}
          >
            <div className="img">{item.char}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;