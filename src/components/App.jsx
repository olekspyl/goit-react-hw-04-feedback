import React from "react";
import { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification"


  class App extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    } 

    countTotalFeedback = () => {
      const total = Object.values(this.state);
      return total.reduce((acc, value) => acc + value, 0);
    }
    
    countPositiveFeedbackPercentage = () => {
     return Number.parseInt(
      this.state.good > 0 ? (this.state.good / this.countTotalFeedback()) * 100 : 0);
    }

onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

    render() {
      const options = Object.keys(this.state);
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();

    return (

      <div>
        <Section title="Please leave feedback" chidlren>
        <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
         />
        </Section>
        <Section title="Statistics" chidlren>
          {total === 0 && <Notification message="There is no feedback" />}
          {total !== 0 && <Statistics
          good={this.state.good }
          neutral={this.state.neutral }
          bad={this.state.bad }
          total={total}
            positivePercentage={positivePercentage} /> }
          
          </Section>
      </div>
    )
  }
}

export default App;


