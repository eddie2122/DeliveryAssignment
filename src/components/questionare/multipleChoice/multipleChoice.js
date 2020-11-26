import React, { useState } from "react";
import "./multipleChoice.css";
import { v4 as uuidv4 } from "uuid";

function MultipleChoice() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), option:"" },
  ]);
  const [count, setCount] = useState(0)

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


  const handleAddFields = (e) => {
    if(count >= 4){
      alert('new')
    }else{
    e.preventDefault();
    setCount(count+1)
    setInputFields([
      ...inputFields,
      { id: uuidv4(), option:"" },
    ]);
  };
}
  return (
    <div>
      <form>
        <form className="desContainer" onSubmit={handleSubmit}>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
                <input
                  className="input-option-2"
                  type="radio"
                  name="option"
                  variant="filled"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              <input
                className="input-option"
                name="option"
                variant="filled"
                value={inputField.option}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </div>
          ))}
          <button
            onClick={handleAddFields}
            className="add-option"
          >
            Add option
          </button>
        </form>
      </form>
    </div>
  );
}

export default MultipleChoice;
