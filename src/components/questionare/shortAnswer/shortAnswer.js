import React from "react";
import './shortAnswer.css'

const ShortAnswer = () => {
  return (
    <div>
      <form action="/action_page.php" className="short-answer-form">
        <br />
        <input className="short-answer-input" type="answer" id="username" placeholder="Short answer 100 words" name="username" maxlength="100" />
      </form>
    </div>
  );
};

export default ShortAnswer;
