import React from "react";
import { Button} from "../App.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul> 
        {options.map((option, idx) => {
          return (
            <li key={idx}>
              <Button
                type="button"
                onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            </li>
          );
        })}
        </ul>
    )
}

export default FeedbackOptions;


