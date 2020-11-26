import { ImageRemoveRedEye } from 'material-ui/svg-icons';
import React from 'react';
import './quizSA.css'

const QuizSA = () => {
    return (
      <div className="sa-container">
        <textarea
          className="sa-input"
          type="answer"
          id="username"
          placeholder="Short answer 100 words"
          name="username"
          maxlength="200"
        />
      </div>
    );
};

export default QuizSA;