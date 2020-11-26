import React, { useState } from "react";
import './quizMCQ.css'
import { v4 as uuidv4 } from "uuid";

function QuizMCQ() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), option: "" },
  ]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  return (
    <div>
      <form>
        <form className="quiz-container" onSubmit={handleSubmit}>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <input
                className="mcq-input1"
                type="radio"
                name="option"
                variant="filled"
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <input
                className="mcq-input2"
                type = "text"
                name="option"
                variant="filled"
                value={inputField.option}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </div>
          ))}
        </form>
      </form>
    </div>
  );
}

export default QuizMCQ;
