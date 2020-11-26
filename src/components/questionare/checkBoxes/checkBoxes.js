import React, { useState } from "react";
import './checkBoxes.css'
import { v4 as uuidv4 } from "uuid";

function Checkboxes() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "" },
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

  const handleAddFields = (e) => {
    if (count >= 4) {
      alert("new");
    } else {
      e.preventDefault();
      setCount(count + 1);
      setInputFields([
        ...inputFields,
        { id: uuidv4(), firstName: "", lastName: "" },
      ]);
    }
  };
  return (
    <div>
      <form>
        <form className="desContainer" onSubmit={handleSubmit}>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <input
                className="input-option-2"
                type="checkbox"
                name="option"
                variant="filled"
                value={inputField.firstName}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <input
                className="input-option"
                name="option"
                variant="filled"
                value={inputField.firstName}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </div>
          ))}
          <button onClick={handleAddFields} className="add-option">
            Add option
          </button>
        </form>
      </form>
    </div>
  );
}

export default Checkboxes;
