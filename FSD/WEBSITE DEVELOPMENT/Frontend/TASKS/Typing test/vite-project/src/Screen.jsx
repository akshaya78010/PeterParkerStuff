import React from "react";

const Screen = () => {
  let current_time = 0;
  let current_text = "";
  let typing_text = "";
  return (
    <>
      <div className="parent">
        <div className="timer">{current_time}</div>
        <div className="buttons_work_section">
          <div className="work_section">
            <div className="text">
              <div className="display_text">{current_text}</div>
              <div className="typing _text">{typing_text}</div>
            </div>

            <div className="buttons_1">
            <div className="submit"></div>
            <div className="reset"></div>
            </div>
          </div>

          <div className="buttons">
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
