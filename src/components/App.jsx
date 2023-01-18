import React from "react";
import { useState } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification"


export default function App(option) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };


  const countTotalFeedback = () => {
      const total = Object.values(state);
      return total.reduce((acc, value) => acc + value, 0);
    }

  const countPositiveFeedbackPercentage = () => {
     return Number.parseInt(
      good > 0 ? (good / countTotalFeedback()) * 100 : 0);
  }
  
  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
      default:
        return;
    };
  };

      const options = Object.keys(state);
      const total = countTotalFeedback();
      const positivePercentage = countPositiveFeedbackPercentage();

  return (
      <div>
        <Section title="Please leave feedback" chidlren>
        <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={options}
         />
        </Section>
        <Section title="Statistics" chidlren>
          {total === 0 && <Notification message="There is no feedback" />}
          {total !== 0 && <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} /> }
          </Section>
      </div>
    )
};


