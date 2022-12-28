import React from "react";
import {StatisticsItem, Container} from "../App.styled"

const Statistics = ({good, neutral, bad, total,  positivePercentage }) => {
  return (
    <Container>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total} </StatisticsItem>
        <StatisticsItem>Positive feedback: {positivePercentage} </StatisticsItem>
      </Container>
  )
}

export default Statistics;


