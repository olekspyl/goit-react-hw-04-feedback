import { Component } from "react";
import { Container, Button} from "../App.styled";


class Feedback extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    
    }

    countTotalFeedback = () => {
        this.setState({
            total: 0,
        })
}
       
     
  handleClickGood = () => {
    this.setState(prevState => {
      return {
          good: prevState.good + 1,
          total: prevState.total +1,
      }
    })
  }
  
  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
          neutral: prevState.neutral + 1,
          total: prevState.total +1,
      
      }
    })
  }
  
  handleClickBad = () => {
    this.setState(prevState => {
      return {
          bad: prevState.bad + 1,
          total: prevState.total +1,
      }
    })
  
}

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Button type="button" onClick={this.handleClickGood}>Good </Button>
        <Button type="button" onClick={this.handleClickNeutral}>Neutral </Button>
        <Button type="button" onClick={this.handleClickBad}>Bad </Button>
        <div>
            <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
                <p>Total: {this.state.total}</p>
          <p>Positive feedback: </p>
            </div>
      </Container>
    )
  }
}

export default Feedback;