import React from "react";
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired, 
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;


