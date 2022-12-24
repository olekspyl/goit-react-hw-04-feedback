import { Component } from "react";
import { Container, Button} from "./App.styled";
import Statistics from "components/Statistics/Statistics";
import Feedback from "components/Feedback/Feedback";


export class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickGood = (event) => {
    console.log(event.target)
  
  }
  
  handleClickNeutral = () => {
    console.log("бюди")
  
  }
  
  handleClickBad = () => {
    console.log("мюди")
  
}

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Button type="button" onClick={this.handleClickGood}>Good</Button>
        <Button type="button" onClick={this.handleClickNeutral}>Neutral</Button>
        <Button type="button" onClick={this.handleClickBad}>Bad</Button>
        <div>
            <h2>Statistics</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
            </div>
        <Feedback />
        <Statistics />
      </Container>
    )
  }
}
