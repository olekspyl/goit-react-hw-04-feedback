import React from "react";
import  {Button, FeedbackList, FeedbackItem} from "../App.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <FeedbackList> 
        {options.map((option, idx) => {
          return (
            <FeedbackItem key={idx}>
              <Button
                type="button"
                onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            </FeedbackItem>
          );
        })}
        </FeedbackList>
    )
}

export default FeedbackOptions;


