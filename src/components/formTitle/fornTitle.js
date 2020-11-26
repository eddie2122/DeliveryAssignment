import React, { useState } from "react";
import "./formTitle.css";
import Select from "react-select";
import ShortAnswer from "../questionare/shortAnswer/shortAnswer";
import MultipleChoice from "../questionare/multipleChoice/multipleChoice";
import CheckBoxes from "../questionare/checkBoxes/checkBoxes";
import Quiz from '../quiz/quiz'

export const UserTitle = React.createContext();
export const UserDescreption = React.createContext();
export const UserQuestion = React.createContext();
export const UserValue = React.createContext();

export default function Example() {
  const [title, setTitle] = useState([]);
  const [descreption, setDescreption] = useState([]);
  const [question, setQuestion] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [type, settype] = useState(null);

  let handleSubmit = () => {
      setSubmitted(true)
  }

  console.log(type);
  function handleAddrTypeChange(e) {
    console.log(e.value);
    settype(e.value);
  }

  const options = [
    { value: "short-answer", label: "Short Answer" },
    { value: "multiple-choice", label: "Multiple choice" },
    { value: "Checkboxes", label: "Check-box" },
  ];
  if (!submitted) {
    return (
      <div>
        <form className="from-title-container1">
          <input
            className="input-title"
            type="text"
            name="formTitle"
            placeholder="Form Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <input
            className="input-title2"
            type="text"
            name="formDescreption"
            placeholder="Form Descreption"
            value={descreption}
            onChange={(e) => setDescreption(e.target.value)}
            required
          ></input>
        </form>
        <form className="from-title-container3">
          <input
            className="input-title3"
            type="text"
            name="formTitle"
            placeholder="Question"
            value={question}
            selected="selected"
            onChange={(e) => setQuestion(e.target.value)}
            // required
          ></input>
          <Select
            name="addrtype"
            options={options}
            value={options.find((item) => item.value === type)}
            onChange={handleAddrTypeChange}
            className="Select"
          />
          {type === "short-answer" ? (
            <ShortAnswer />
          ) : type === "multiple-choice" ? (
            <MultipleChoice />
          ) : type === "Checkboxes" ? (
            <CheckBoxes />
          ) : null}
          <button type="submit" onClick={handleSubmit} className="Select1">
            Submit
          </button>
        </form>
      </div>
    );
  }
   else {
      return (
        <UserTitle.Provider value={title}>
          <UserDescreption.Provider value={descreption}>
            <UserQuestion.Provider value={question}>
              <UserValue.Provider value={type}>
                <Quiz />
              </UserValue.Provider>
            </UserQuestion.Provider>
          </UserDescreption.Provider>
        </UserTitle.Provider>
      );
    }
}
